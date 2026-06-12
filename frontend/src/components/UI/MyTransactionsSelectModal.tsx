import { useState } from "react";
import type { UIComponent } from "../../types";

interface MyTransactionsOption {
  label: string;
  myTransactionsVariant: UIComponent["myTransactionsVariant"];
}

interface Props {
  myTransactionsOptions: MyTransactionsOption[];
  onClose: () => void;
  onAdd: (selected: MyTransactionsOption[]) => void;
}

export default function MyTransactionsSelectModal({
  myTransactionsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<MyTransactionsOption[]>([]);

  const toggleOption = (option: MyTransactionsOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.myTransactionsVariant ===
          option.myTransactionsVariant
      );
      if (exists) {
        return prev.filter(
          (item) =>
            item.myTransactionsVariant !==
            option.myTransactionsVariant
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select My Transactions</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="my-txn-preview-list">
          {myTransactionsOptions.map((option) => (
            <label
              key={option.myTransactionsVariant}
              className="my-txn-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.myTransactionsVariant ===
                    option.myTransactionsVariant
                )}
                onChange={() => toggleOption(option)}
              />
              <span className="my-txn-preview-label">
                {option.label}
              </span>
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