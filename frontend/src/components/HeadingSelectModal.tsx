import { useState } from "react";
import type { HeadingLevel } from "../types";

interface HeadingOption {
  label: string;
  headingLevel: HeadingLevel;
}

interface Props {
  headingOptions: readonly HeadingOption[];
  onClose: () => void;
  onAdd: (selected: HeadingOption[]) => void;
}

export default function HeadingSelectModal({
  headingOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    HeadingOption[]
  >([]);

  const toggleHeading = (
    option: HeadingOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.headingLevel === option.headingLevel
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.headingLevel !==
            option.headingLevel
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Headings</h3>

          <button onClick={onClose}>
            ×
          </button>
        </div>

        <div className="heading-options">
          {headingOptions.map((option) => (
            <label
              key={option.headingLevel}
              className="heading-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.headingLevel ===
                    option.headingLevel
                )}
                onChange={() =>
                  toggleHeading(option)
                }
              />

              <span>{option.label}</span>
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