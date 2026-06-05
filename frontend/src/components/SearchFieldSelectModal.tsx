import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchFieldOption {
  label: string;
}

interface Props {
  searchFieldOptions: SearchFieldOption[];
  onClose: () => void;
  onAdd: (selected: SearchFieldOption[]) => void;
}

export default function SearchFieldSelectModal({
  searchFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<SearchFieldOption[]>([]);

  const toggleSearchField = (option: SearchFieldOption) => {
    setSelected((prev) => {
      const exists = prev.some((item) => item.label === option.label);

      if (exists) {
        return prev.filter((item) => item.label !== option.label);
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Search Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="searchfield-preview-list">
          {searchFieldOptions.map((option) => (
            <label key={option.label} className="searchfield-preview-option">
              <input
                type="checkbox"
                checked={selected.some((item) => item.label === option.label)}
                onChange={() => toggleSearchField(option)}
              />

              <div className="searchfield-box">
                <FiSearch />

                <input type="text" placeholder={option.label} readOnly />
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