import { useState } from "react";
import { FiCreditCard } from "react-icons/fi";

interface CreditCardFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  creditCardFieldOptions: CreditCardFieldOption[];
  onClose: () => void;
  onAdd: (selected: CreditCardFieldOption[]) => void;
}

export default function CreditCardFieldSelectModal({
  creditCardFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    CreditCardFieldOption[]
  >([]);

  const toggleCreditCardField = (
    option: CreditCardFieldOption
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
          <h3>Select Credit Card Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="creditcardfield-preview-list">
          {creditCardFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="creditcardfield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  toggleCreditCardField(option)
                }
              />

              <div className="creditcardfield-wrapper modal-creditcardfield-preview">
                <label className="creditcardfield-label">
                  {option.label}
                </label>

                <div className="preview-creditcardfield">
                  <FiCreditCard />

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