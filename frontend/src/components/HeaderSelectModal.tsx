import { useState } from "react";
import HeaderComponent from "./UI/HeaderComponent";

interface HeaderOption {
  label: string;
}

interface Props {
  headerOptions: HeaderOption[];
  onClose: () => void;
  onAdd: (selected: HeaderOption[]) => void;
}

export default function HeaderSelectModal({
  headerOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<HeaderOption[]>([]);

  const toggleHeader = (option: HeaderOption) => {
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
          <h3>Select Header</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="header-preview-list">
          {headerOptions.map((option) => (
            <label
              key={option.label}
              className="header-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleHeader(option)}
              />
              <div className="header-preview-box">
                <HeaderComponent />
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