import { useState } from "react";
import MultiSelectCardsComponent from "./UI/MultiSelectCardsComponent";

interface MultiSelectCardsOption {
  label: string;
}

interface Props {
  multiSelectCardsOptions: MultiSelectCardsOption[];
  onClose: () => void;
  onAdd: (selected: MultiSelectCardsOption[]) => void;
}

export default function MultiSelectCardsSelectModal({
  multiSelectCardsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    MultiSelectCardsOption[]
  >([]);

  const toggleCards = (
    option: MultiSelectCardsOption
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
          <h3>Select Multi Select Cards</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="multi-select-cards-preview-list">
          {multiSelectCardsOptions.map((option) => (
            <label
              key={option.label}
              className="multi-select-cards-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleCards(option)}
              />

              <div className="multi-select-cards-preview-box">
                <MultiSelectCardsComponent />
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