import { useState } from "react";
import TransactionComponent from "./UI/TransactionComponent";

interface TransactionOption {
  label: string;
}

interface Props {
  transactionOptions: TransactionOption[];
  onClose: () => void;
  onAdd: (selected: TransactionOption[]) => void;
}

export default function TransactionSelectModal({
  transactionOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TransactionOption[]
  >([]);

  const toggleTransaction = (
    option: TransactionOption
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
          <h3>Select Transaction</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="transaction-preview-list">
          {transactionOptions.map((option) => (
            <label
              key={option.label}
              className="transaction-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleTransaction(option)
                }
              />

              <div className="transaction-preview-box">
                <TransactionComponent />
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