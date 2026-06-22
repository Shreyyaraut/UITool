import { useState } from "react";
import ScannerComponent from "./UI/ScannerComponent";

interface ScannerOption {
  label: string;
}

interface Props {
  scannerOptions: ScannerOption[];
  onClose: () => void;
  onAdd: (selected: ScannerOption[]) => void;
}

export default function ScannerSelectModal({
  scannerOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<ScannerOption[]>([]);

  const toggleScanner = (option: ScannerOption) => {
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
          <h3>Select Scanner</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="scanner-preview-list">
          {scannerOptions.map((option) => (
            <label
              key={option.label}
              className="scanner-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleScanner(option)}
              />

              <div className="scanner-preview-box">
                <ScannerComponent />
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