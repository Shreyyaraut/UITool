import { useState } from "react";
import type { UIComponent } from "../types";

interface ButtonOption {
  label: string;
  buttonVariant: UIComponent["buttonVariant"];
}

interface Props {
  buttonOptions: ButtonOption[];
  onClose: () => void;
  onAdd: (selected: ButtonOption[]) => void;
}

export default function ButtonSelectModal({
  buttonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<ButtonOption[]>([]);

  const toggleButton = (option: ButtonOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.buttonVariant === option.buttonVariant
      );

      if (exists) {
        return prev.filter(
          (item) => item.buttonVariant !== option.buttonVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Buttons</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="button-preview-list">
          {buttonOptions.map((option) => (
            <label
              key={option.buttonVariant}
              className="button-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.buttonVariant === option.buttonVariant
                )}
                onChange={() => toggleButton(option)}
              />

              <button
                type="button"
                className={`preview-button ${
                  option.buttonVariant || "primary"
                }`}
                disabled={option.buttonVariant === "disabled"}
                onClick={(e) => {
                  e.preventDefault();
                  toggleButton(option);
                }}
              >
                {option.buttonVariant === "loading" ? "" : option.label}
              </button>
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