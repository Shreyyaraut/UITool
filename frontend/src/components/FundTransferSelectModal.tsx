import { useState } from "react";
import FundTransferComponent from "./UI/FundTransferComponent";

interface FundTransferOption {
  label: string;
}

interface Props {
  fundTransferOptions: FundTransferOption[];
  onClose: () => void;
  onAdd: (selected: FundTransferOption[]) => void;
}

export default function FundTransferSelectModal({
  fundTransferOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    FundTransferOption[]
  >([]);

  const toggleFundTransfer = (
    option: FundTransferOption
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
          <h3>Select Fund Transfer</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="fund-transfer-preview-list">
          {fundTransferOptions.map((option) => (
            <label
              key={option.label}
              className="fund-transfer-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleFundTransfer(option)
                }
              />

              <div className="fund-transfer-preview-box">
                <FundTransferComponent />
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