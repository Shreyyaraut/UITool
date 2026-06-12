import { MdFingerprint } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";

export default function BiometricErrorComponent() {
  return (
    <div className="biometric-error-screen">
      {/* <div className="biometric-error-header">
        <FiArrowLeft />
      </div> */}

      <div className="biometric-error-content">
        <MdFingerprint className="biometric-error-icon" />

        <h3>Fingerprint Required</h3>

        <p>
          Please use the fingerprint sensor to continue
        </p>

        <button type="button">
          Retry Scan Finger
        </button>
      </div>
    </div>
  );
}