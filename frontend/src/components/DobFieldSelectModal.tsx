import { useState } from "react";

interface DobFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  dobFieldOptions: DobFieldOption[];
  onClose: () => void;
  onAdd: (selected: DobFieldOption[]) => void;
}

export default function DobFieldSelectModal({
  dobFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    DobFieldOption[]
  >([]);

  const toggleDobField = (
    option: DobFieldOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.placeholder === option.placeholder
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.placeholder !== option.placeholder
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select DOB Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dobfield-preview-list">
          {dobFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="dobfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  toggleDobField(option)
                }
              />

              <div className="dobfield-wrapper modal-dobfield-preview">
                <label className="dobfield-label">
                  {option.label}
                </label>

                <input
                  className="preview-dobfield"
                  type="text"
                  placeholder={option.placeholder}
                  readOnly
                />
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