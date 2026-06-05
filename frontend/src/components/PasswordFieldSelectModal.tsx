import { useState } from "react";
import { FiEyeOff } from "react-icons/fi";
import type { UIComponent } from "../types";

interface PasswordFieldOption {
  label: string;
  passwordFieldVariant:
    UIComponent["passwordFieldVariant"];
}

interface Props {
  passwordFieldOptions: PasswordFieldOption[];
  onClose: () => void;
  onAdd: (selected: PasswordFieldOption[]) => void;
}

export default function PasswordFieldSelectModal({
  passwordFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    PasswordFieldOption[]
  >([]);

  const togglePasswordField = (
    option: PasswordFieldOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.passwordFieldVariant ===
          option.passwordFieldVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.passwordFieldVariant !==
            option.passwordFieldVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Password Fields</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="passwordfield-preview-list">
          {passwordFieldOptions.map((option) => (
            <label
              key={option.passwordFieldVariant}
              className="passwordfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.passwordFieldVariant ===
                    option.passwordFieldVariant
                )}
                onChange={() =>
                  togglePasswordField(option)
                }
              />

              <PasswordFieldPreview option={option} />
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

function PasswordFieldPreview({
  option,
}: {
  option: PasswordFieldOption;
}) {
  const variant =
    option.passwordFieldVariant || "default";

  const value =
    variant === "filled"
      ? option.label
      : "";

  return (
    <div className="passwordfield-wrapper modal-passwordfield-preview">
      <label className="passwordfield-label">
        Password
      </label>

      <div
        className={`preview-passwordfield ${variant}`}
      >
        <input
          type="password"
          placeholder="Password"
          value={value}
          readOnly
        />

        <FiEyeOff />
      </div>

      {variant === "error" && (
        <span className="passwordfield-error">
          Password is required
        </span>
      )}
    </div>
  );
}