import { FiX } from "react-icons/fi";

export default function SelectionActionSheetComponent() {
  return (
    <div className="selection-action-sheet-wrapper">
      <div className="selection-action-sheet-overlay"></div>

      <div className="selection-action-sheet">

        {/* Header */}
        <div className="selection-sheet-header">
          <span>Choose Option</span>

          <button className="selection-sheet-close">
            <FiX />
          </button>
        </div>

        {/* Options */}
        <div className="selection-sheet-content">
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
  );
}