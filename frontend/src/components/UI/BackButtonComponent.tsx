import { FiArrowLeft } from "react-icons/fi";

export default function BackButtonComponent() {
  return (
    <div className="back-button-screen">
      <button
        type="button"
        className="back-button-icon"
      >
        <FiArrowLeft />
      </button>
    </div>
  );
}