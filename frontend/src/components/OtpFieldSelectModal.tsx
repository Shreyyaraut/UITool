import { useState } from "react";

interface OtpFieldOption {
  label: string;
}

interface Props {
  otpFieldOptions: OtpFieldOption[];
  onClose: () => void;
  onAdd: (selected: OtpFieldOption[]) => void;
}

export default function OtpFieldSelectModal({
  otpFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    OtpFieldOption[]
  >([]);

  const toggleOtpField = (option: OtpFieldOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );

      if (exists) {
        return prev.filter(
          (item) => item.label !== option.label
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select OTP Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="otpfield-preview-list">
          {otpFieldOptions.map((option) => (
            <label
              key={option.label}
              className="otpfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.label === option.label
                )}
                onChange={() =>
                  toggleOtpField(option)
                }
              />

              <div className="otpfield-wrapper modal-otpfield-preview">
                <label className="otpfield-label">
                  {option.label}
                </label>

                <div className="otp-box-group">
                  {[1, 2, 3, 4, 5, 6].map((box) => (
                    <input
                      key={box}
                      className="otp-box"
                      type="text"
                      maxLength={1}
                      readOnly
                    />
                  ))}
                </div>
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