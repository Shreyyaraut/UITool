import { useState } from "react";
import type { UIComponent } from "../../types";

interface IconWithCardOption {
  label: string;
  iconWithCardVariant: UIComponent["iconWithCardVariant"];
}

interface Props {
  iconWithCardOptions: IconWithCardOption[];
  onClose: () => void;
  onAdd: (selected: IconWithCardOption[]) => void;
}

function BroadbandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#222"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="15" width="20" height="6" rx="1" />
      <path d="M5 12a10 10 0 0 1 14 0" />
      <path d="M8 9a6 6 0 0 1 8 0" />
      <line x1="12" y1="18" x2="12" y2="18" strokeWidth="3" />
    </svg>
  );
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
                <div
                  className={`icon-with-card-preview-sample ${option.iconWithCardVariant}`}
                >
                  {Array.from({ length: 6 }).map((_, i) => (
                    <div
                      key={i}
                      className={`icon-with-card-item ${option.iconWithCardVariant}`}
                    >
                      <BroadbandIcon />
                      <span className="icon-with-card-label">
                        Broadband
                      </span>
                    </div>
                  ))}
                </div>
                <span className="icon-with-card-variant-label">
                  {option.label}
                </span>
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