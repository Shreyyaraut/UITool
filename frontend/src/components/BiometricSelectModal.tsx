import { useState } from "react";
import { MdFingerprint } from "react-icons/md";

interface BiometricOption {
  label: string;
}

interface Props {
  biometricOptions: BiometricOption[];
  onClose: () => void;
  onAdd: (selected: BiometricOption[]) => void;
}

export default function BiometricSelectModal({
  biometricOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    BiometricOption[]
  >([]);

  const toggleBiometric = (
    option: BiometricOption
  ) => {
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
          <h3>Select Biometric</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="biometric-preview-list">
          {biometricOptions.map((option) => (
            <label
              key={option.label}
              className="biometric-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleBiometric(option)
                }
              />

              <div className="biometric-preview-box">
                <div className="biometric-wrapper preview">
                  <div className="biometric-overlay"></div>

                  <div className="biometric-sheet">
                    <h3>Authentic with device</h3>

                    <MdFingerprint className="biometric-icon" />

                    <p>Touch the fingerprint sensor</p>

                    <button type="button">
                      Cancel
                    </button>
                  </div>
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