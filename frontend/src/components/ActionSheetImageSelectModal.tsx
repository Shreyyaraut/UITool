import { useState } from "react";

const imageUrl =
  "src/assets/appimg.jpg";

interface ActionSheetImageOption {
  label: string;
}

interface Props {
  actionSheetImageOptions: ActionSheetImageOption[];
  onClose: () => void;
  onAdd: (selected: ActionSheetImageOption[]) => void;
}

export default function ActionSheetImageSelectModal({
  actionSheetImageOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ActionSheetImageOption[]
  >([]);

  const toggleActionSheetImage = (
    option: ActionSheetImageOption
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
          <h3>Select Action Sheet Image</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="actionsheet-preview-list">
          {actionSheetImageOptions.map((option) => (
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
                  toggleActionSheetImage(option)
                }
              />

              <div className="action-sheet-preview-box">
                <div className="action-sheet-wrapper preview">
                  <div className="action-sheet-overlay"></div>

                  <div className="action-sheet image-sheet">
                    <img
                      src={imageUrl}
                      alt="Action"
                      className="action-sheet-img"
                    />

                    <h3>Confirm Message</h3>

                    <p>
                      This is a confirmation message
                      <br />
                      with an image
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