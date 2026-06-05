import { useState } from "react";
import type { UIComponent } from "../types";

interface CheckboxOption {
  label: string;
  checkboxVariant: UIComponent["checkboxVariant"];
}

interface Props {
  checkboxOptions: CheckboxOption[];
  onClose: () => void;
  onAdd: (selected: CheckboxOption[]) => void;
}

export default function CheckboxSelectModal({
  checkboxOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    CheckboxOption[]
  >([]);

  const toggleCheckbox = (
    option: CheckboxOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.checkboxVariant ===
          option.checkboxVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.checkboxVariant !==
            option.checkboxVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Checkbox</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="checkbox-preview-list">
          {checkboxOptions.map((option) => (
            <label
              key={option.checkboxVariant}
              className="checkbox-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.checkboxVariant ===
                    option.checkboxVariant
                )}
                onChange={() =>
                  toggleCheckbox(option)
                }
              />

              <label className="checkbox-wrapper">
                <input
                  type="checkbox"
                  checked={
                    option.checkboxVariant ===
                    "checked"
                  }
                  readOnly
                />

                <span>{option.label}</span>
              </label>
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