import { useState } from "react";

interface VerticalStepperOption {
  label: string;
}

interface Props {
  verticalStepperOptions: VerticalStepperOption[];
  onClose: () => void;
  onAdd: (selected: VerticalStepperOption[]) => void;
}

export default function VerticalStepperSelectModal({
  verticalStepperOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<VerticalStepperOption[]>([]);

  const toggleStepper = (option: VerticalStepperOption) => {
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

  const steps = [
    { label: "Business Details", status: "completed", action: "View" },
    { label: "Author Verification", status: "completed", action: "View" },
    { label: "Aadhaar Verification", status: "completed", action: "View" },
    { label: "Document Upload", status: "active" },
    { label: "Reference Admin Verification", status: "disabled" },
    { label: "Bank Verification", status: "disabled" },
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Vertical Stepper</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="vertical-stepper-preview-list">
          {verticalStepperOptions.map((option) => (
            <label
              key={option.label}
              className="vertical-stepper-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleStepper(option)}
              />

              <div className="vertical-stepper modal-vertical-stepper-preview">
                {steps.map((step, index) => (
                  <div
                    className={`stepper-item ${step.status}`}
                    key={step.label}
                  >
                    <div className="stepper-left">
                      <span className="stepper-dot"></span>

                      {index !== steps.length - 1 && (
                        <span className="stepper-line"></span>
                      )}
                    </div>

                    <div className="stepper-content">
                      <span className="stepper-label">
                        {step.label}
                      </span>

                      {step.action && (
                        <button
                          type="button"
                          className="stepper-view-btn"
                        >
                          {step.action}
                        </button>
                      )}
                    </div>
                  </div>
                ))}
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