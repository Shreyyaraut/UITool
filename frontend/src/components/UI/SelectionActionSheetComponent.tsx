export default function SelectionActionSheetComponent() {
  return (
    <div className="selection-action-sheet-wrapper">
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
  );
}