import { useState } from "react";
import { MdFingerprint } from "react-icons/md";
// import { FiArrowLeft } from "react-icons/fi";

interface BiometricErrorOption {
  label: string;
}

interface Props {
  biometricErrorOptions: BiometricErrorOption[];
  onClose: () => void;
  onAdd: (selected: BiometricErrorOption[]) => void;
}

export default function BiometricErrorSelectModal({
  biometricErrorOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    BiometricErrorOption[]
  >([]);

  const toggleBiometricError = (
    option: BiometricErrorOption
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
          <h3>Select Biometric Error</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="biometric-error-preview-list">
          {biometricErrorOptions.map((option) => (
            <label
              key={option.label}
              className="biometric-error-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleBiometricError(option)
                }
              />

              <div className="biometric-error-preview-box">
                <div className="biometric-error-screen">
                  {/* <div className="biometric-error-header">
                    <FiArrowLeft />
                  </div> */}

                  <div className="biometric-error-content">
                    <MdFingerprint className="biometric-error-icon" />

                    <h3>Fingerprint Required</h3>

                    <p>
                      Please use the fingerprint sensor
                      <br />
                      to continue
                    </p>

                    <button type="button">
                      Retry Scan Finger
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