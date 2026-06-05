import { useState } from "react";
import type { UIComponent } from "../types";

interface ToggleButtonOption {
  label: string;
  toggleVariant: UIComponent["toggleVariant"];
}

interface Props {
  toggleButtonOptions: ToggleButtonOption[];
  onClose: () => void;
  onAdd: (selected: ToggleButtonOption[]) => void;
}

export default function ToggleButtonSelectModal({
  toggleButtonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ToggleButtonOption[]
  >([]);

  const toggleToggleButton = (
    option: ToggleButtonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.toggleVariant === option.toggleVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.toggleVariant !==
            option.toggleVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Toggle Button</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="toggle-preview-list">
          {toggleButtonOptions.map((option) => (
            <label
              key={option.toggleVariant}
              className="toggle-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.toggleVariant ===
                    option.toggleVariant
                )}
                onChange={() =>
                  toggleToggleButton(option)
                }
              />

              <TogglePreview
                variant={option.toggleVariant}
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

function TogglePreview({
  variant,
}: {
  variant: UIComponent["toggleVariant"];
}) {
  if (variant === "twoLeft" || variant === "twoRight") {
    return (
      <div className="toggle-wrapper two">
        <button
          className={
            variant === "twoLeft" ? "active" : ""
          }
        >
          Selected
        </button>

        <button
          className={
            variant === "twoRight" ? "active" : ""
          }
        >
          {variant === "twoRight"
            ? "Selected"
            : "Unselected"}
        </button>
      </div>
    );
  }

  const active =
    variant === "threeLeft"
      ? "Left"
      : variant === "threeCenter"
      ? "Center"
      : variant === "threeRight"
      ? "Right"
      : "all";

  return (
    <div
      className={`toggle-wrapper three ${
        variant === "threeFull" ? "full" : ""
      }`}
    >
      {["Left", "Center", "Right"].map((label) => (
        <button
          key={label}
          className={
            active === label || active === "all"
              ? "active"
              : ""
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}