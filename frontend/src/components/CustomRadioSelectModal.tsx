import { useState } from "react";
import { FiUser } from "react-icons/fi";

interface CustomRadioOption {
  label: string;
  customRadioActive: number;
}

interface Props {
  customRadioOptions: CustomRadioOption[];
  onClose: () => void;
  onAdd: (selected: CustomRadioOption[]) => void;
}

export default function CustomRadioSelectModal({
  customRadioOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<CustomRadioOption[]>([]);

  const toggleCustomRadio = (option: CustomRadioOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.customRadioActive === option.customRadioActive
      );

      if (exists) {
        return prev.filter(
          (item) => item.customRadioActive !== option.customRadioActive
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Custom Radio</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="custom-radio-preview-list">
          {customRadioOptions.map((option) => (
            <label
              key={option.customRadioActive}
              className="custom-radio-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.customRadioActive === option.customRadioActive
                )}
                onChange={() => toggleCustomRadio(option)}
              />

              <div className="custom-radio-group modal-custom-radio-preview">
                {[0, 1, 2].map((index) => (
                  <div
                    key={index}
                    className={`custom-radio-item ${
                      option.customRadioActive === index ? "active" : ""
                    }`}
                  >
                    <FiUser />
                    <span>Person</span>
                  </div>
                ))}
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