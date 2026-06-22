import { useState } from "react";
import BackButtonComponent from "./UI/BackButtonComponent";

interface BackButtonOption {
  label: string;
}

interface Props {
  backButtonOptions: BackButtonOption[];
  onClose: () => void;
  onAdd: (
    selected: BackButtonOption[]
  ) => void;
}

export default function BackButtonSelectModal({
  backButtonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<BackButtonOption[]>([]);

  const toggleBackButton = (
    option: BackButtonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.label === option.label
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.label !== option.label
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Back Button</h3>

          <button
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="back-button-preview-list">
          {backButtonOptions.map(
            (option) => (
              <label
                key={option.label}
                className="back-button-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.label ===
                      option.label
                  )}
                  onChange={() =>
                    toggleBackButton(
                      option
                    )
                  }
                />

                <div className="back-button-preview-box">
                  <BackButtonComponent />
                </div>
              </label>
            )
          )}
        </div>

        <button
          className="heading-add-btn"
          disabled={
            selected.length === 0
          }
          onClick={() =>
            onAdd(selected)
          }
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}