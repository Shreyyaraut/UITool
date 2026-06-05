import { FiMonitor } from "react-icons/fi";

export default function DeviceInfoComponent() {
  return (
    <div className="device-info-card">
      <div className="device-info-icon">
        <FiMonitor />
      </div>

      <div className="device-info-content">
        <h4>Device Info</h4>
        <p>About device information</p>
      </div>
    </div>
  );
}