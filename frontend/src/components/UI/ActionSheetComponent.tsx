export default function ActionSheetComponent() {
  return (
    <div className="action-sheet-wrapper">
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
  );
}