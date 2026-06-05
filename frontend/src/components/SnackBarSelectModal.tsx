import { useState } from "react";
import type { UIComponent } from "../types";

interface SnackBarOption {
  label: string;
  snackBarVariant: UIComponent["snackBarVariant"];
}

interface Props {
  snackBarOptions: SnackBarOption[];
  onClose: () => void;
  onAdd: (selected: SnackBarOption[]) => void;
}

export default function SnackBarSelectModal({
  snackBarOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<SnackBarOption[]>([]);

  const toggleSnackBar = (option: SnackBarOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.snackBarVariant === option.snackBarVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.snackBarVariant !== option.snackBarVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Snack Bar</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="snackbar-preview-list">
          {snackBarOptions.map((option) => (
            <label
              key={option.snackBarVariant}
              className="snackbar-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.snackBarVariant ===
                    option.snackBarVariant
                )}
                onChange={() => toggleSnackBar(option)}
              />

              <SnackBarPreview option={option} />
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

function SnackBarPreview({
  option,
}: {
  option: SnackBarOption;
}) {
  const variant =
    option.snackBarVariant || "information";

  const titleMap = {
    information: "Information",
    success: "Success",
    error: "Error",
    warning: "Warning",
  };

  const messageMap = {
    information: "This is an information message",
    success: "This is a success message",
    error: "This is an error message",
    warning: "This is a warning message",
  };

  return (
    <div className={`snackbar-box ${variant}`}>
      <h4>{titleMap[variant]}</h4>
      <p>{messageMap[variant]}</p>
    </div>
  );
}