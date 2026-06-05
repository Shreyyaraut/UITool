import { useState } from "react";

interface VerificationFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  verificationFieldOptions: VerificationFieldOption[];
  onClose: () => void;
  onAdd: (selected: VerificationFieldOption[]) => void;
}

export default function VerificationFieldSelectModal({
  verificationFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    VerificationFieldOption[]
  >([]);

  const toggleVerificationField = (
    option: VerificationFieldOption
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
          <h3>Select Verification Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="verificationfield-preview-list">
          {verificationFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="verificationfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  toggleVerificationField(option)
                }
              />

              <div className="verificationfield-wrapper modal-verificationfield-preview">
                <label className="verificationfield-label">
                  {option.label}
                </label>

                <input
                  className="preview-verificationfield"
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