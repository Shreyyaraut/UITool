import { useState } from "react";
import PhonebookComponent from "./UI/PhonebookComponent";

interface PhonebookOption {
  label: string;
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
  const [selected, setSelected] = useState<
    PhonebookOption[]
  >([]);

  const togglePhonebook = (
    option: PhonebookOption
  ) => {
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
          <h3>Select Phonebook</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="phonebook-preview-list">
          {phonebookOptions.map((option) => (
            <label
              key={option.label}
              className="phonebook-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  togglePhonebook(option)
                }
              />

              <div className="phonebook-preview-box">
                <PhonebookComponent />
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