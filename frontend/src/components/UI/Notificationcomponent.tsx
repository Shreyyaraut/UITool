import { FiBell } from "react-icons/fi";

export default function NotificationComponent() {
  return (
    <div className="notification-wrapper">
      <div className="notification-icon-box">
        <FiBell />

        <span className="notification-badge">
          2
        </span>
      </div>
    </div>
  );
}