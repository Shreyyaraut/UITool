import { useState } from "react";
import { FiWifi } from "react-icons/fi";
import type { UIComponent } from "../types";

interface IconWithCardOption {
  label: string;
  iconWithCardVariant: UIComponent["iconWithCardVariant"];
}

interface Props {
  iconWithCardOptions: IconWithCardOption[];
  onClose: () => void;
  onAdd: (selected: IconWithCardOption[]) => void;
}

export default function IconWithCardSelectModal({
  iconWithCardOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<IconWithCardOption[]>([]);

  const toggleOption = (option: IconWithCardOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.iconWithCardVariant ===
          option.iconWithCardVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.iconWithCardVariant !==
            option.iconWithCardVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Icons With Card</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="icon-with-card-preview-list">
          {iconWithCardOptions.map((option) => (
            <label
              key={option.iconWithCardVariant}
              className="icon-with-card-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.iconWithCardVariant ===
                    option.iconWithCardVariant
                )}
                onChange={() => toggleOption(option)}
              />

              <div className="icon-with-card-preview-box">
                <div className="icon-with-card-preview-sample">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <div
                      key={i}
                      className={`icon-with-card-item ${option.iconWithCardVariant}`}
                    >
                      <FiWifi className="icon-with-card-icon" />

                      <span className="icon-with-card-label">
                        Broadband
                      </span>
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