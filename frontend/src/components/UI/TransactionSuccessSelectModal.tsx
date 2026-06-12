import { useState } from "react";
import TransactionSuccessComponent from "../TransactionSuccessComponent";

interface TransactionSuccessOption {
  label: string;
}

interface Props {
  transactionSuccessOptions: TransactionSuccessOption[];
  onClose: () => void;
  onAdd: (selected: TransactionSuccessOption[]) => void;
}

export default function TransactionSuccessSelectModal({
  transactionSuccessOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<TransactionSuccessOption[]>([]);

  const toggleOption = (option: TransactionSuccessOption) => {
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

        <div className="txn-success-preview-list">
          {transactionSuccessOptions.map((option) => (
            <label
              key={option.label}
              className="txn-success-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleOption(option)}
              />
              <div className="txn-success-preview-box">
                <TransactionSuccessComponent />
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