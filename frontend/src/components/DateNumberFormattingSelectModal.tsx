import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface DateNumberFormattingOption {
  label: string;
}

interface Props {
  dateNumberFormattingOptions: DateNumberFormattingOption[];
  onClose: () => void;
  onAdd: (selected: DateNumberFormattingOption[]) => void;
}

export default function DateNumberFormattingSelectModal({
  dateNumberFormattingOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    DateNumberFormattingOption[]
  >([]);

  const toggleDateNumber = (
    option: DateNumberFormattingOption
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

  const rows = [
    ["Current Date", "June 2, 2026"],
    ["Price", "₹ 1,499.99"],
    ["Growth", "12.4%"],
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Date & Number</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="date-number-preview-list">
          {dateNumberFormattingOptions.map((option) => (
            <label
              key={option.label}
              className="date-number-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleDateNumber(option)
                }
              />

              <div className="date-number-preview-box">
                <div className="date-number-screen">
                  <div className="date-number-header">
                    <FiArrowLeft />
                  </div>

                  <div className="date-number-list">
                    {rows.map(([label, value]) => (
                      <div
                        className="date-number-row"
                        key={label}
                      >
                        <span>{label}</span>
                        <strong>{value}</strong>
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