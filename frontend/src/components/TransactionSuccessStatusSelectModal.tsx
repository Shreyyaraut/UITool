import { useState } from "react";
import TransactionSuccessStatusComponent from "./UI/TransactionSuccessStatusComponent";

interface TransactionSuccessStatusOption {
  label: string;
}

interface Props {
  transactionSuccessStatusOptions: TransactionSuccessStatusOption[];
  onClose: () => void;
  onAdd: (selected: TransactionSuccessStatusOption[]) => void;
}

export default function TransactionSuccessStatusSelectModal({
  transactionSuccessStatusOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TransactionSuccessStatusOption[]
  >([]);

  const toggleStatus = (
    option: TransactionSuccessStatusOption
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
          <h3>Select Transaction Success Status</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="transaction-status-preview-list">
          {transactionSuccessStatusOptions.map((option) => (
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
                <TransactionSuccessStatusComponent />
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