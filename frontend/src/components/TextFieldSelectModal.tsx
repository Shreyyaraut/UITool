import { useState } from "react";
import type { UIComponent } from "../types";

interface TextFieldOption {
  label: string;
  textFieldVariant: UIComponent["textFieldVariant"];
}

interface Props {
  textFieldOptions: TextFieldOption[];
  onClose: () => void;
  onAdd: (selected: TextFieldOption[]) => void;
}

export default function TextFieldSelectModal({
  textFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<TextFieldOption[]>([]);

  const toggleTextField = (option: TextFieldOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.textFieldVariant === option.textFieldVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.textFieldVariant !== option.textFieldVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Text Fields</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="textfield-preview-list">
          {textFieldOptions.map((option) => (
            <label
              key={option.textFieldVariant}
              className="textfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.textFieldVariant ===
                    option.textFieldVariant
                )}
                onChange={() => toggleTextField(option)}
              />

              <TextFieldPreview option={option} />
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

function TextFieldPreview({
  option,
}: {
  option: TextFieldOption;
}) {
  const variant = option.textFieldVariant || "placeholder";

  const value =
    variant === "filledFocused" || variant === "filled"
      ? option.label
      : "";

  return (
    <div className="textfield-wrapper modal-textfield-preview">
      <label className="textfield-label">
        First name
      </label>

      <input
        className={`preview-textfield ${variant}`}
        placeholder={
          variant === "placeholder"
            ? option.label
            : ""
        }
        value={value}
        readOnly
      />
    </div>
  );
}