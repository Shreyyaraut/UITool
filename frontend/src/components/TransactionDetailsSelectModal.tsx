import { useState } from "react";
import TransactionDetailsComponent from "./UI/TransactionDetailsComponent";

interface TransactionDetailsOption {
  label: string;
}

interface Props {
  transactionDetailsOptions: TransactionDetailsOption[];
  onClose: () => void;
  onAdd: (selected: TransactionDetailsOption[]) => void;
}

export default function TransactionDetailsSelectModal({
  transactionDetailsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TransactionDetailsOption[]
  >([]);

  const toggleDetails = (
    option: TransactionDetailsOption
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
          <h3>Select Transaction Details</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="transaction-details-preview-list">
          {transactionDetailsOptions.map((option) => (
            <label
              key={option.label}
              className="transaction-details-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleDetails(option)}
              />

              <div className="transaction-details-preview-box">
                <TransactionDetailsComponent />
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