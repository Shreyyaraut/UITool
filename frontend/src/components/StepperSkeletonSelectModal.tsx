import { useState } from "react";
import type { UIComponent } from "../types";

interface StepperSkeletonOption {
  label: string;
  stepperSkeletonVariant:
    UIComponent["stepperSkeletonVariant"];
}

interface Props {
  stepperSkeletonOptions: StepperSkeletonOption[];
  onClose: () => void;
  onAdd: (
    selected: StepperSkeletonOption[]
  ) => void;
}

export default function StepperSkeletonSelectModal({
  stepperSkeletonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    StepperSkeletonOption[]
  >([]);

  const toggleStepperSkeleton = (
    option: StepperSkeletonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.stepperSkeletonVariant ===
          option.stepperSkeletonVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.stepperSkeletonVariant !==
            option.stepperSkeletonVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Stepper Skeleton</h3>

          <button
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="stepper-skeleton-preview-list">
          {stepperSkeletonOptions.map((option) => (
            <label
              key={option.stepperSkeletonVariant}
              className="stepper-skeleton-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.stepperSkeletonVariant ===
                    option.stepperSkeletonVariant
                )}
                onChange={() =>
                  toggleStepperSkeleton(option)
                }
              />

              <div className="stepper-skeleton-wrapper modal-stepper-skeleton-preview">
                <h4>{option.label}</h4>

                <div className="stepper-skeleton-row">
                  {[1, 2, 3].map((step) => (
                    <div
                      key={step}
                      className="stepper-skeleton-item"
                    >
                      <span
                        className={`stepper-skeleton-dot ${
                          option.stepperSkeletonVariant ||
                          "light"
                        }`}
                      ></span>

                      <span
                        className={`stepper-skeleton-bar ${
                          option.stepperSkeletonVariant ||
                          "light"
                        }`}
                      ></span>
                    </div>
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