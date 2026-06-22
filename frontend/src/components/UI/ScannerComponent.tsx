import {
  FiX
} from "react-icons/fi";

import { BsLightbulb } from "react-icons/bs";

export default function ScannerComponent() {
  return (
    <div className="scanner-screen">
      <div className="scanner-header">
        <button type="button">
          <FiX />
        </button>

        <button type="button">
          <BsLightbulb />
        </button>
      </div>

      <div className="scanner-content">
        <div className="scanner-frame">
          <span className="corner top-left"></span>
          <span className="corner top-right"></span>
          <span className="corner bottom-left"></span>
          <span className="corner bottom-right"></span>

          <div className="scanner-box"></div>
        </div>

        <button
          type="button"
          className="scanner-upload-btn"
        >
          Upload from gallery
        </button>
      </div>
    </div>
  );
}