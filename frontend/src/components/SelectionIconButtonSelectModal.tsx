import { useState } from "react";
import { IoMdHome } from "react-icons/io";
import type { UIComponent } from "../types";

interface SelectionIconButtonOption {
  label: string;
  selectionIconButtonVariant:
    UIComponent["selectionIconButtonVariant"];
}

interface Props {
  selectionIconButtonOptions: SelectionIconButtonOption[];
  onClose: () => void;
  onAdd: (selected: SelectionIconButtonOption[]) => void;
}

export default function SelectionIconButtonSelectModal({
  selectionIconButtonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    SelectionIconButtonOption[]
  >([]);

  const toggleIconButton = (
    option: SelectionIconButtonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.selectionIconButtonVariant ===
          option.selectionIconButtonVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.selectionIconButtonVariant !==
            option.selectionIconButtonVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Icon Button</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="selection-icon-preview-list">
          {selectionIconButtonOptions.map((option) => (
            <label
              key={option.selectionIconButtonVariant}
              className="selection-icon-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.selectionIconButtonVariant ===
                    option.selectionIconButtonVariant
                )}
                onChange={() =>
                  toggleIconButton(option)
                }
              />

              <SelectionIconPreview
                variant={
                  option.selectionIconButtonVariant
                }
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

function SelectionIconPreview({
  variant,
}: {
  variant:
    UIComponent["selectionIconButtonVariant"];
}) {
  if (variant === "sizes") {
    return (
      <div className="selection-icon-section">
        <h4>Sizes</h4>

        <div className="selection-icon-row sizes">
          <button className="icon-btn small">
            <IoMdHome />
          </button>

          <button className="icon-btn medium">
            <IoMdHome />
          </button>

          <button className="icon-btn large">
            <IoMdHome />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="selection-icon-section">
      <h4>
        {variant === "selected"
          ? "Selected"
          : variant === "disabled"
          ? "Disabled"
          : "Default"}
      </h4>

      <div className="selection-icon-row">
        {[1, 2, 3].map((item) => (
          <button
            key={item}
            disabled={variant === "disabled"}
            className={`icon-btn ${
              variant || "default"
            }`}
          >
            <IoMdHome />
          </button>
        ))}
      </div>
    </div>
  );
}