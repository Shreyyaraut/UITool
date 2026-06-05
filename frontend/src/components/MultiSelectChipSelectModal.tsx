import { useState } from "react";
import type { UIComponent } from "../types";

interface MultiSelectChipOption {
  label: string;
  multiSelectChipVariant:
    UIComponent["multiSelectChipVariant"];
}

interface Props {
  multiSelectChipOptions: MultiSelectChipOption[];
  onClose: () => void;
  onAdd: (
    selected: MultiSelectChipOption[]
  ) => void;
}

export default function MultiSelectChipSelectModal({
  multiSelectChipOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    MultiSelectChipOption[]
  >([]);

  const toggleChip = (
    option: MultiSelectChipOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.multiSelectChipVariant ===
          option.multiSelectChipVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.multiSelectChipVariant !==
            option.multiSelectChipVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Multi Chips</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="multi-chip-preview-list">
          {multiSelectChipOptions.map((option) => {
            const isSelected =
              option.multiSelectChipVariant ===
              "selected";

            return (
              <label
                key={option.multiSelectChipVariant}
                className="multi-chip-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.multiSelectChipVariant ===
                      option.multiSelectChipVariant
                  )}
                  onChange={() =>
                    toggleChip(option)
                  }
                />

                <div className="multi-chip-group">
                  {[1, 2, 3].map((chip) => (
                    <span
                      key={chip}
                      className={`multi-chip ${
                        isSelected
                          ? "selected"
                          : "default"
                      }`}
                    >
                      {isSelected
                        ? "Selected"
                        : "Default"}
                    </span>
                  ))}
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