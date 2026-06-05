import { useState } from "react";
import {
  FiArrowLeft,
  FiSearch,
  FiUser,
} from "react-icons/fi";

interface ContactsOption {
  label: string;
}

interface Props {
  contactsOptions: ContactsOption[];
  onClose: () => void;
  onAdd: (selected: ContactsOption[]) => void;
}

export default function ContactsSelectModal({
  contactsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ContactsOption[]
  >([]);

  const toggleContacts = (option: ContactsOption) => {
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

  const contacts = Array.from(
    { length: 5 },
    (_, index) => ({
      id: index + 1,
      name: "Person Name",
      phone: "+91 9898989898",
    })
  );

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Contacts</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="contacts-preview-list">
          {contactsOptions.map((option) => (
            <label
              key={option.label}
              className="contacts-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleContacts(option)
                }
              />

              <div className="contacts-preview-box">
                <div className="contacts-screen">
                  <div className="contacts-header">
                    <FiArrowLeft />
                    <span>My Contacts</span>
                  </div>

                  <div className="contacts-search">
                    <FiSearch />
                    <input
                      type="text"
                      placeholder="Search"
                      readOnly
                    />
                  </div>

                  <div className="contacts-list">
                    {contacts.map((contact) => (
                      <div
                        className="contact-item"
                        key={contact.id}
                      >
                        <div className="contact-avatar">
                          <FiUser />
                        </div>

                        <div className="contact-info">
                          <h4>{contact.name}</h4>
                          <p>{contact.phone}</p>
                        </div>
                      </div>
                    ))}
                  </div>
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