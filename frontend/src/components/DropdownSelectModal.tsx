import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import type { UIComponent } from "../types";

interface DropdownOption {
  label: string;
  dropdownVariant: UIComponent["dropdownVariant"];
}

interface Props {
  dropdownOptions: DropdownOption[];
  onClose: () => void;
  onAdd: (selected: DropdownOption[]) => void;
}

export default function DropdownSelectModal({
  dropdownOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    DropdownOption[]
  >([]);

  const toggleDropdown = (
    option: DropdownOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.dropdownVariant ===
          option.dropdownVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.dropdownVariant !==
            option.dropdownVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Dropdown</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="dropdown-preview-list">
          {dropdownOptions.map((option) => (
            <label
              key={option.dropdownVariant}
              className="dropdown-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.dropdownVariant ===
                    option.dropdownVariant
                )}
                onChange={() =>
                  toggleDropdown(option)
                }
              />

              <div
                className={`preview-dropdown ${
                  option.dropdownVariant ===
                  "disabled"
                    ? "disabled"
                    : ""
                }`}
              >
                <span>{option.label}</span>
                <FiChevronDown />
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