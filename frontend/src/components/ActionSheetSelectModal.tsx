import { useState } from "react";

interface ActionSheetOption {
  label: string;
}

interface Props {
  actionSheetOptions: ActionSheetOption[];
  onClose: () => void;
  onAdd: (selected: ActionSheetOption[]) => void;
}

export default function ActionSheetSelectModal({
  actionSheetOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ActionSheetOption[]
  >([]);

  const toggleActionSheet = (
    option: ActionSheetOption
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

        <div className="actionsheet-preview-list">
          {actionSheetOptions.map((option) => (
            <label
              key={option.label}
              className="actionsheet-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleActionSheet(option)
                }
              />

              <div className="action-sheet-preview-box">
                <div className="action-sheet-wrapper preview">
                  <div className="action-sheet-overlay"></div>

                  <div className="action-sheet">
                    <h3>Confirm Message</h3>

                    <p>
                      This is a confirmation message
                      <br />
                      without an image
                    </p>

                    <button className="action-confirm-btn">
                      Confirm
                    </button>

                    <button className="action-cancel-btn">
                      Cancel
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