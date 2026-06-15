import { useState } from "react";
import { FiArrowLeft, FiSearch } from "react-icons/fi";

interface DropdownList2Option {
  label: string;
}

interface Props {
  dropdownList2Options: DropdownList2Option[];
  onClose: () => void;
  onAdd: (selected: DropdownList2Option[]) => void;
}

export default function DropdownList2SelectModal({
  dropdownList2Options,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<DropdownList2Option[]>([]);

  const toggleDropdownList2 = (option: DropdownList2Option) => {
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
          <h3>Select Dropdown List 2</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dropdownlist2-preview-list">
          {dropdownList2Options.map((option) => (
            <label
              key={option.label}
              className="dropdownlist2-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleDropdownList2(option)}
              />

              <div className="dropdown-list2-preview-box">
                <div className="dropdown-list2-wrapper">
                  <div className="dropdown-list2-header">
                    <button
                      type="button"
                      className="dropdown-list2-back"
                    >
                      <FiArrowLeft />
                    </button>

                    <span className="dropdown-list2-title">
                      Select City
                    </span>
                  </div>

                  <div className="dropdown-list2-search">
                    <FiSearch />

                    <input
                      type="text"
                      placeholder="Search"
                      readOnly
                    />
                  </div>

                  {cities.map((city) => (
                    <div
                      key={city}
                      className="dropdown-list2-item"
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