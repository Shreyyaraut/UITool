import { useState } from "react";
import type { UIComponent } from "../../types";

interface PhonebookOption {
  label: string;
  phonebookVariant: UIComponent["phonebookVariant"];
}

interface Props {
  phonebookOptions: PhonebookOption[];
  onClose: () => void;
  onAdd: (selected: PhonebookOption[]) => void;
}

export default function PhonebookSelectModal({
  phonebookOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<PhonebookOption[]>([]);

  const toggleOption = (option: PhonebookOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.phonebookVariant === option.phonebookVariant
      );
      if (exists) {
        return prev.filter(
          (item) =>
            item.phonebookVariant !== option.phonebookVariant
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Phonebook</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="phonebook-preview-list">
          {phonebookOptions.map((option) => (
            <label
              key={option.phonebookVariant}
              className="phonebook-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.phonebookVariant ===
                    option.phonebookVariant
                )}
                onChange={() => toggleOption(option)}
              />
              <span className="phonebook-preview-label">
                {option.label}
              </span>
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