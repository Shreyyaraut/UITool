import { useState } from "react";

interface HorizontalStepperOption {
  label: string;
}

interface Props {
  horizontalStepperOptions: HorizontalStepperOption[];
  onClose: () => void;
  onAdd: (selected: HorizontalStepperOption[]) => void;
}

export default function HorizontalStepperSelectModal({
  horizontalStepperOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    HorizontalStepperOption[]
  >([]);

  const toggleStepper = (
    option: HorizontalStepperOption
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
          <h3>Select Horizontal Stepper</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="horizontal-stepper-preview-list">
          {horizontalStepperOptions.map((option) => (
            <label
              key={option.label}
              className="horizontal-stepper-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleStepper(option)
                }
              />

              <div className="horizontal-stepper modal-horizontal-stepper-preview">
                <div className="horizontal-step active done">
                  <span>✓</span>
                  <p>Step</p>
                </div>

                <div className="horizontal-line active"></div>

                <div className="horizontal-step active done">
                  <span>✓</span>
                  <p>Step</p>
                </div>

                <div className="horizontal-line active"></div>

                <div className="horizontal-step current">
                  <span>3</span>
                  <p>Step</p>
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