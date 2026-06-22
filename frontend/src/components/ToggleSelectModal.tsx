import { useState } from "react";

interface ToggleOption {
  label: string;
  toggleSize: "large" | "small";
}

interface Props {
  toggleOptions: ToggleOption[];
  onClose: () => void;
  onAdd: (selected: ToggleOption[]) => void;
}

export default function ToggleSelectModal({
  toggleOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ToggleOption[]
  >([]);

  const toggleItem = (option: ToggleOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.toggleSize === option.toggleSize
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.toggleSize !== option.toggleSize
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Toggle</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="toggle-preview-list">
          {toggleOptions.map((option) => (
            <label
              key={option.toggleSize}
              className="toggle-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.toggleSize === option.toggleSize
                )}
                onChange={() => toggleItem(option)}
              />

              <div
                className={`toggle-chip-row ${
                  option.toggleSize === "small"
                    ? "small"
                    : ""
                }`}
              >
                <button className="toggle-chip active">
                  Components
                </button>

                <button className="toggle-chip">
                  Home
                </button>

                <button className="toggle-chip">
                  Profile
                </button>
              </div>
            </label>
          ))}
        </div>

        <button
          className="heading-add-btn"
          disabled={selected.length === 0}
          onClick={() => onAdd(selected)}
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}