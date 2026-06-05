import { useState } from "react";
import type { UIComponent } from "../types";

interface CardRadioOption {
  label: string;
  cardRadioVariant: UIComponent["cardRadioVariant"];
}

interface Props {
  cardRadioOptions: CardRadioOption[];
  onClose: () => void;
  onAdd: (selected: CardRadioOption[]) => void;
}

export default function CardRadioSelectModal({
  cardRadioOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    CardRadioOption[]
  >([]);

  const toggleCardRadio = (
    option: CardRadioOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.cardRadioVariant ===
          option.cardRadioVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.cardRadioVariant !==
            option.cardRadioVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Card Radio</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="cardradio-preview-list">
          {cardRadioOptions.map((option) => (
            <label
              key={option.cardRadioVariant}
              className="cardradio-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.cardRadioVariant ===
                    option.cardRadioVariant
                )}
                onChange={() =>
                  toggleCardRadio(option)
                }
              />

              <div
                className={`cardradio-box ${
                  option.cardRadioVariant ===
                  "checked"
                    ? "checked"
                    : ""
                }`}
              >
                <input
                  type="radio"
                  checked={
                    option.cardRadioVariant ===
                    "checked"
                  }
                  readOnly
                />

                <div className="cardradio-content">
                  <h4>Bank Name</h4>
                  <p>2424242424242424</p>
                </div>
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