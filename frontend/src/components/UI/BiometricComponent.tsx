import { MdFingerprint } from "react-icons/md";

export default function BiometricComponent() {
  return (
    <div className="biometric-wrapper">
      <div className="biometric-overlay"></div>

      <div className="biometric-sheet">
        <h3>Authentic with device</h3>

        <MdFingerprint className="biometric-icon" />

        <p>Touch the fingerprint sensor</p>

        <button type="button">
          Cancel
        </button>
      </div>
    </div>
  );
}