import { useState } from "react";
import PassbookComponent from "./UI/PassbookComponent";

interface PassbookOption {
  label: string;
}

interface Props {
  passbookOptions: PassbookOption[];
  onClose: () => void;
  onAdd: (selected: PassbookOption[]) => void;
}

export default function PassbookSelectModal({
  passbookOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<PassbookOption[]>([]);

  const togglePassbook = (option: PassbookOption) => {
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
          <h3>Select Passbook</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="passbook-preview-list">
          {passbookOptions.map((option) => (
            <label
              key={option.label}
              className="passbook-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => togglePassbook(option)}
              />

              <div className="passbook-preview-box">
                <PassbookComponent />
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