import { useState } from "react";
import NotificationComponent from "./UI/Notificationcomponent";

interface NotificationOption {
  label: string;
}

interface Props {
  notificationOptions: NotificationOption[];
  onClose: () => void;
  onAdd: (selected: NotificationOption[]) => void;
}

export default function NotificationSelectModal({
  notificationOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<NotificationOption[]>([]);

  const toggleNotification = (
    option: NotificationOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );
      if (exists) {
        return prev.filter(
          (item) => item.label !== option.label
        );
      }
      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Notification</h3>
          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="notification-preview-list">
          {notificationOptions.map((option) => (
            <label
              key={option.label}
              className="notification-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleNotification(option)
                }
              />
              <div className="notification-preview-box">
                <NotificationComponent />
              </div>
            </label>
          ))}
        </div>

        <button
          className="heading-add-btn"
          disabled={selected.length === 0}
          onClick={() => onAdd(selected)}
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}