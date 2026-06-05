import { useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
} from "react-icons/fi";

interface ContactsErrorOption {
  label: string;
}

interface Props {
  contactsErrorOptions: ContactsErrorOption[];
  onClose: () => void;
  onAdd: (selected: ContactsErrorOption[]) => void;
}

export default function ContactsErrorSelectModal({
  contactsErrorOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ContactsErrorOption[]
  >([]);

  const toggleContactsError = (
    option: ContactsErrorOption
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
          <h3>Select Contacts Error</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="contacts-error-preview-list">
          {contactsErrorOptions.map((option) => (
            <label
              key={option.label}
              className="contacts-error-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleContactsError(option)
                }
              />

              <div className="contacts-error-preview-box">
                <ContactsErrorPreview />
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

function ContactsErrorPreview() {
  return (
    <div className="contacts-error-screen">
      <div className="contacts-error-header">
        <FiArrowLeft />
        <span>My Contacts</span>
      </div>

      <div className="contacts-error-search">
        <FiSearch />
        <input type="text" value="Pranav" readOnly />
      </div>

      <div className="contacts-error-message">
        No matching contacts found
      </div>
    </div>
  );
}