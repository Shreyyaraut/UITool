import { useState } from "react";
import type { ComponentType } from "../types";

interface ComponentOption {
  type: ComponentType;
  label: string;
}

interface Props {
  title: string;
  options: ComponentOption[];
  onClose: () => void;
  onAdd: (selected: ComponentOption[]) => void;
}

export default function ComponentGroupSelectModal({
  title,
  options,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<ComponentOption[]>([]);

  // const toggleOption = (option: ComponentOption) => {
  //   setSelected((prev) => {
  //     const exists = prev.some(
  //       (item) => item.type === option.type
  //     );

  //     if (exists) {
  //       return prev.filter(
  //         (item) => item.type !== option.type
  //       );
  //     }

  //     return [...prev, option];
  //   });
  // };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>{title}</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="input-field-options">
          {options.map((option) => (
            <label
              key={option.type}
              className="input-field-option"
            >
             <input
  type="radio"
  name="component-option"
  checked={selected.some(
    (item) => item.type === option.type
  )}
  onChange={() => setSelected([option])}
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