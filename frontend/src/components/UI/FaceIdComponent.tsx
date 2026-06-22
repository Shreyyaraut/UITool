import { MdFaceRetouchingNatural } from "react-icons/md";

export default function FaceIdComponent() {
  return (
    <div className="face-id-screen">
      <div className="face-id-overlay"></div>

      <div className="face-id-sheet">
        <h3>Authentic with device</h3>

        <MdFaceRetouchingNatural className="face-id-icon" />

        <p>Use Face ID to continue</p>

        <button type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}