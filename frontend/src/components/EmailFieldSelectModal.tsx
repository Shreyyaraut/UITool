import { useState } from "react";
import type { UIComponent } from "../types";

interface EmailFieldOption {
  label: string;
  emailFieldVariant: UIComponent["emailFieldVariant"];
}

interface Props {
  emailFieldOptions: EmailFieldOption[];
  onClose: () => void;
  onAdd: (selected: EmailFieldOption[]) => void;
}

export default function EmailFieldSelectModal({
  emailFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<EmailFieldOption[]>([]);

  const toggleEmailField = (option: EmailFieldOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.emailFieldVariant === option.emailFieldVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.emailFieldVariant !== option.emailFieldVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Email Fields</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="emailfield-preview-list">
          {emailFieldOptions.map((option) => (
            <label
              key={option.emailFieldVariant}
              className="emailfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.emailFieldVariant ===
                    option.emailFieldVariant
                )}
                onChange={() => toggleEmailField(option)}
              />

              <EmailFieldPreview option={option} />
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

function EmailFieldPreview({
  option,
}: {
  option: EmailFieldOption;
}) {
  const variant =
    option.emailFieldVariant || "default";

  const value =
    variant === "filled"
      ? option.label
      : "";

  return (
    <div className="emailfield-wrapper modal-emailfield-preview">
      <label className="emailfield-label">
        Email Address
      </label>

      <input
        className={`preview-emailfield ${variant}`}
        type="email"
        placeholder="you@example.com"
        value={value}
        readOnly
      />

      {variant === "error" && (
        <span className="emailfield-error">
          Invalid email address
        </span>
      )}
    </div>
  );
}