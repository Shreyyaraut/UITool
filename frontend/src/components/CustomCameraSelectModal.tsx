import { useState } from "react";
import {
  FiUserCheck,
  FiCamera,
} from "react-icons/fi";
import type { UIComponent } from "../types";

interface CustomCameraOption {
  label: string;
  customCameraVariant:
    UIComponent["customCameraVariant"];
}

interface Props {
  customCameraOptions: CustomCameraOption[];
  onClose: () => void;
  onAdd: (selected: CustomCameraOption[]) => void;
}

export default function CustomCameraSelectModal({
  customCameraOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    CustomCameraOption[]
  >([]);

  const toggleCustomCamera = (
    option: CustomCameraOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.customCameraVariant ===
          option.customCameraVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.customCameraVariant !==
            option.customCameraVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Custom Camera</h3> 

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="custom-camera-preview-list">
          {customCameraOptions.map((option) => (
            <label
              key={option.customCameraVariant}
              className="custom-camera-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.customCameraVariant ===
                    option.customCameraVariant
                )}
                onChange={() =>
                  toggleCustomCamera(option)
                }
              />

              <div className="custom-camera-box">
                {option.customCameraVariant === "document" ? (
  <FiCamera />
) : (
  <FiUserCheck />
)}

                <span>{option.label}</span>
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