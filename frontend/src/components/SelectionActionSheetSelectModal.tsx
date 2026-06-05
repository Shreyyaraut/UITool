import { useState } from "react";

interface SelectionActionSheetOption {
  label: string;
}

interface Props {
  selectionActionSheetOptions: SelectionActionSheetOption[];
  onClose: () => void;
  onAdd: (selected: SelectionActionSheetOption[]) => void;
}

export default function SelectionActionSheetSelectModal({
  selectionActionSheetOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    SelectionActionSheetOption[]
  >([]);

  const toggleSelectionSheet = (
    option: SelectionActionSheetOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );

      if (exists) {
        return prev.filter(
          (item) => item.label !== option.label
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Action Sheet</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="selection-sheet-preview-list">
          {selectionActionSheetOptions.map((option) => (
            <label
              key={option.label}
              className="selection-sheet-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleSelectionSheet(option)
                }
              />

              <div className="selection-sheet-preview-box">
                <div className="selection-action-sheet-wrapper preview">
                  <div className="selection-action-sheet-overlay"></div>

                  <div className="selection-action-sheet">
                    <button className="selection-option selected">
                      Selected
                    </button>

                    <button className="selection-option">
                      Unselected
                    </button>

                    <button className="selection-option">
                      Unselected
                    </button>
                  </div>
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