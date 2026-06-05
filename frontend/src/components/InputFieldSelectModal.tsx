import { useState } from "react";
import type { ComponentType } from "../types";

interface InputFieldOption {
  label: string;
  type: ComponentType;
}

interface Props {
  inputFieldOptions: InputFieldOption[];
  onClose: () => void;
  onAdd: (selected: InputFieldOption[]) => void;
}

export default function InputFieldSelectModal({
  inputFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<InputFieldOption[]>([]);

  const toggleField = (option: InputFieldOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.type === option.type
      );

      if (exists) {
        return prev.filter(
          (item) => item.type !== option.type
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Input Fields</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="input-field-options">
          {inputFieldOptions.map((option) => (
            <label
              key={option.type}
              className="input-field-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.type === option.type
                )}
                onChange={() => toggleField(option)}
              />

              <span>{option.label}</span>
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