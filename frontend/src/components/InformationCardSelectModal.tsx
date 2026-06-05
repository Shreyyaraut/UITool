import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import type { UIComponent } from "../types";

interface InformationCardOption {
  label: string;
  informationCardVariant:
    UIComponent["informationCardVariant"];
}

interface Props {
  informationCardOptions: InformationCardOption[];
  onClose: () => void;
  onAdd: (
    selected: InformationCardOption[]
  ) => void;
}

export default function InformationCardSelectModal({
  informationCardOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    InformationCardOption[]
  >([]);

  const toggleInfoCard = (
    option: InformationCardOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.informationCardVariant ===
          option.informationCardVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.informationCardVariant !==
            option.informationCardVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Information Card</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="info-card-preview-list">
          {informationCardOptions.map((option) => {
            const showMessage =
              option.informationCardVariant ===
              "withMessage";

            return (
              <label
                key={option.informationCardVariant}
                className="info-card-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.informationCardVariant ===
                      option.informationCardVariant
                  )}
                  onChange={() =>
                    toggleInfoCard(option)
                  }
                />

                <div className="info-card">
                  <div className="info-card-header">
                    <FiInfo />
                    <span>Information</span>
                  </div>

                  {showMessage && (
                    <p>
                      This is an information message
                    </p>
                  )}
                </div>
              </label>
            );
          })}
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