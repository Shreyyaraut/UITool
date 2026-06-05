import { useState } from "react";
import { FiInfo } from "react-icons/fi";

interface CvvFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  cvvFieldOptions: CvvFieldOption[];
  onClose: () => void;
  onAdd: (selected: CvvFieldOption[]) => void;
}

export default function CvvFieldSelectModal({
  cvvFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<CvvFieldOption[]>([]);

  const toggleCvvField = (
    option: CvvFieldOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.placeholder ===
          option.placeholder
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.placeholder !==
            option.placeholder
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select CVV Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cvvfield-preview-list">
          {cvvFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="cvvfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  toggleCvvField(option)
                }
              />

              <div className="cvvfield-wrapper modal-cvvfield-preview">
                <label className="cvvfield-label">
                  {option.label}
                </label>

                <div className="preview-cvvfield">
                  <input
                    type="text"
                    placeholder={option.placeholder}
                    readOnly
                  />

                  <FiInfo />
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