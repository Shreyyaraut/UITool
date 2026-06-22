import { useState } from "react";
import PhonebookAccessComponent from "./UI/PhonebookAccessComponent";

interface PhonebookAccessOption {
  label: string;
}

interface Props {
  phonebookAccessOptions: PhonebookAccessOption[];
  onClose: () => void;
  onAdd: (selected: PhonebookAccessOption[]) => void;
}

export default function PhonebookAccessSelectModal({
  phonebookAccessOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    PhonebookAccessOption[]
  >([]);

  const togglePhonebookAccess = (
    option: PhonebookAccessOption
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
          <h3>Select Phonebook Access</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="phonebook-access-preview-list">
          {phonebookAccessOptions.map((option) => (
            <label
              key={option.label}
              className="phonebook-access-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  togglePhonebookAccess(option)
                }
              />

              <div className="phonebook-access-preview-box">
                <PhonebookAccessComponent />
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