import { useState } from "react";
import type { UIComponent } from "../types";

interface AppImageOption {
  label: string;
  appImageVariant: UIComponent["appImageVariant"];
}

interface Props {
  appImageOptions: AppImageOption[];
  onClose: () => void;
  onAdd: (selected: AppImageOption[]) => void;
}

const imageUrl =
  "./src/assets/appimg.jpg";

export default function AppImageSelectModal({
  appImageOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<AppImageOption[]>([]);

  const toggleAppImage = (option: AppImageOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.appImageVariant === option.appImageVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.appImageVariant !== option.appImageVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select App Image</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="app-image-preview-list">
          {appImageOptions.map((option) => (
            <label
              key={option.appImageVariant}
              className="app-image-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.appImageVariant ===
                    option.appImageVariant
                )}
                onChange={() => toggleAppImage(option)}
              />

              <div className="app-image-wrapper">
                <img
                  src={imageUrl}
                  alt={option.label}
                  className={`app-image ${
                    option.appImageVariant || "square"
                  }`}
                />

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