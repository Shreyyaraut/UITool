import { useState } from "react";
import type { UIComponent } from "../types";

interface ChipTagOption {
  label: string;
  chipVariant: UIComponent["chipVariant"];
}

interface Props {
  chipTagOptions: ChipTagOption[];
  onClose: () => void;
  onAdd: (selected: ChipTagOption[]) => void;
}

export default function ChipTagSelectModal({
  chipTagOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<ChipTagOption[]>([]);

  const toggleChip = (option: ChipTagOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.chipVariant === option.chipVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.chipVariant !== option.chipVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Chip Tags</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="chip-preview-list">
          {chipTagOptions.map((option) => (
            <label
              key={option.chipVariant}
              className="chip-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.chipVariant ===
                    option.chipVariant
                )}
                onChange={() => toggleChip(option)}
              />

              <span
                className={`chip-tag ${
                  option.chipVariant || "default"
                }`}
              >
                {option.label}
              </span>
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