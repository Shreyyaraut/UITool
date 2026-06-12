import { useState } from "react";
import type { UIComponent } from "../../types";

interface SwitchButtonOption {
  label: string;
  switchButtonVariant: UIComponent["switchButtonVariant"];
}

interface Props {
  switchButtonOptions: SwitchButtonOption[];
  onClose: () => void;
  onAdd: (selected: SwitchButtonOption[]) => void;
}

export default function SwitchButtonSelectModal({
  switchButtonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<SwitchButtonOption[]>([]);

  const toggleSwitch = (option: SwitchButtonOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.switchButtonVariant === option.switchButtonVariant
      );
      if (exists) {
        return prev.filter(
          (item) =>
            item.switchButtonVariant !== option.switchButtonVariant
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Switch Button</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="switch-preview-list">
          {switchButtonOptions.map((option) => (
            <label
              key={option.switchButtonVariant}
              className="switch-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.switchButtonVariant ===
                    option.switchButtonVariant
                )}
                onChange={() => toggleSwitch(option)}
              />
              <SwitchPreview
                variant={option.switchButtonVariant}
                label={option.label}
              />
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

function SwitchPreview({
  variant,
  label,
}: {
  variant: UIComponent["switchButtonVariant"];
  label: string;
}) {
  return (
    <div className="switch-button-row">
      <span className="switch-button-label">
        {label}
      </span>
      <div
        className={`switch-button-track ${
          variant === "on" ? "switch-on" : "switch-off"
        }`}
      >
        <div className="switch-button-thumb" />
      </div>
    </div>
  );
}