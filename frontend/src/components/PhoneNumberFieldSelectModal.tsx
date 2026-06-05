import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

interface PhoneNumberFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  phoneNumberFieldOptions: PhoneNumberFieldOption[];
  onClose: () => void;
  onAdd: (selected: PhoneNumberFieldOption[]) => void;
}

export default function PhoneNumberFieldSelectModal({
  phoneNumberFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    PhoneNumberFieldOption[]
  >([]);

  const togglePhoneNumberField = (
    option: PhoneNumberFieldOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.placeholder === option.placeholder
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.placeholder !== option.placeholder
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Phone Number Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="phonefield-preview-list">
          {phoneNumberFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="phonefield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  togglePhoneNumberField(option)
                }
              />

              <div className="phonefield-wrapper modal-phonefield-preview">
                <label className="phonefield-label">
                  {option.label}
                </label>

                <div className="preview-phonefield">
                  <div className="phone-country">
                    {/* <span className="phone-flag">🇮🇳</span> */}
                    <span>+91</span>
                    <FiChevronDown />
                  </div>

                  <div className="phone-divider"></div>

                  <input
                    type="text"
                    placeholder={option.placeholder}
                    readOnly
                  />
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