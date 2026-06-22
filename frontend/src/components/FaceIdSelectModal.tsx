import { useState } from "react";
import FaceIdComponent from "./UI/FaceIdComponent";

interface FaceIdOption {
  label: string;
}

interface Props {
  faceIdOptions: FaceIdOption[];
  onClose: () => void;
  onAdd: (selected: FaceIdOption[]) => void;
}

export default function FaceIdSelectModal({
  faceIdOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<FaceIdOption[]>([]);

  const toggleFaceId = (option: FaceIdOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );

      return exists
        ? prev.filter((item) => item.label !== option.label)
        : [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Face ID</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="face-id-preview-list">
          {faceIdOptions.map((option) => (
            <label
              key={option.label}
              className="face-id-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleFaceId(option)}
              />

              <div className="face-id-preview-box">
                <FaceIdComponent />
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