import { useState } from "react";

interface StepProgressOption {
  label: string;
}

interface Props {
  stepProgressOptions: StepProgressOption[];
  onClose: () => void;
  onAdd: (selected: StepProgressOption[]) => void;
}

export default function StepProgressSelectModal({
  stepProgressOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    StepProgressOption[]
  >([]);

  const toggleStepProgress = (
    option: StepProgressOption
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
          <h3>Select Step Progress</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="step-progress-preview-list">
          {stepProgressOptions.map((option) => (
            <label
              key={option.label}
              className="step-progress-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleStepProgress(option)
                }
              />

              <div className="step-progress-wrapper modal-step-progress-preview">
                <div className="step-progress-bars">
                  <span className="active"></span>
                  <span className="active"></span>
                  <span className="active"></span>
                  <span></span>
                </div>

                <div className="step-progress-actions">
                  <button>Previous</button>
                  <button>Next</button>
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