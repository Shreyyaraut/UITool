import { useState } from "react";
import TransactionFailedStatusComponent from "./UI/TransactionFailedStatusComponent";

interface TransactionFailedStatusOption {
  label: string;
}

interface Props {
  transactionFailedStatusOptions: TransactionFailedStatusOption[];
  onClose: () => void;
  onAdd: (selected: TransactionFailedStatusOption[]) => void;
}

export default function TransactionFailedStatusSelectModal({
  transactionFailedStatusOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TransactionFailedStatusOption[]
  >([]);

  const toggleStatus = (
    option: TransactionFailedStatusOption
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
          <h3>Select Transaction Failed Status</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="transaction-status-preview-list">
          {transactionFailedStatusOptions.map((option) => (
            <label
              key={option.label}
              className="transaction-status-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleStatus(option)}
              />

              <div className="transaction-status-preview-box">
                <TransactionFailedStatusComponent />
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