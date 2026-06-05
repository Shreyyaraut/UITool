import { useState } from "react";

interface DropdownListOption {
  label: string;
}

interface Props {
  dropdownListOptions: DropdownListOption[];
  onClose: () => void;
  onAdd: (selected: DropdownListOption[]) => void;
}

export default function DropdownListSelectModal({
  dropdownListOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    DropdownListOption[]
  >([]);

  const toggleDropdownList = (
    option: DropdownListOption
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

  const cities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amritsar",
    "Bengaluru",
    "Bhopal",
    "Bhubaneswar",
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Dropdown List</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dropdownlist-preview-list">
          {dropdownListOptions.map((option) => (
            <label
              key={option.label}
              className="dropdownlist-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleDropdownList(option)
                }
              />

              <div className="dropdown-list-preview-box">
                <div className="dropdown-list-preview-sheet">
                  {cities.slice(0, 4).map((city) => (
                    <div
                      key={city}
                      className="dropdown-list-item"
                    >
                      {city}
                    </div>
                  ))}
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