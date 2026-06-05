import { useState } from "react";
import type { UIComponent } from "../types";

interface RadioButtonOption {
  label: string;
  radioVariant: UIComponent["radioVariant"];
}

interface Props {
  radioButtonOptions: RadioButtonOption[];
  onClose: () => void;
  onAdd: (selected: RadioButtonOption[]) => void;
}

export default function RadioButtonSelectModal({
  radioButtonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    RadioButtonOption[]
  >([]);

  const toggleRadioButton = (
    option: RadioButtonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.radioVariant ===
          option.radioVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.radioVariant !==
            option.radioVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Radio Button</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="radio-preview-list">
          {radioButtonOptions.map((option) => (
            <label
              key={option.radioVariant}
              className="radio-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.radioVariant ===
                    option.radioVariant
                )}
                onChange={() =>
                  toggleRadioButton(option)
                }
              />

              <div className="radio-wrapper modal-radio-preview">
                <label className="radio-option">
                  <input
                    type="radio"
                    checked={
                      option.radioVariant === "male"
                    }
                    readOnly
                  />
                  <span>Male</span>
                </label>

                <label className="radio-option">
                  <input
                    type="radio"
                    checked={
                      option.radioVariant === "female"
                    }
                    readOnly
                  />
                  <span>Female</span>
                </label>
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