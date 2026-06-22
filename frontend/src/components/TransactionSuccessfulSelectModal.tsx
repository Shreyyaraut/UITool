import { useState } from "react";
import TransactionSuccessfulComponent from "./UI/TransactionSuccessfulComponent";

interface TransactionSuccessfulOption {
  label: string;
}

interface Props {
  transactionSuccessfulOptions: TransactionSuccessfulOption[];
  onClose: () => void;
  onAdd: (selected: TransactionSuccessfulOption[]) => void;
}

export default function TransactionSuccessfulSelectModal({
  transactionSuccessfulOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TransactionSuccessfulOption[]
  >([]);

  const toggleTransaction = (
    option: TransactionSuccessfulOption
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
          <h3>Select Transaction Successful</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="transaction-success-preview-list">
          {transactionSuccessfulOptions.map((option) => (
            <label
              key={option.label}
              className="transaction-success-preview-option"
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

              <div className="transaction-success-preview-box">
                <TransactionSuccessfulComponent />
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