const imageUrl =
  "src/assets/appimg.jpg";

export default function ActionSheetImageComponent() {
  return (
    <div className="action-sheet-wrapper">
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
  );
}