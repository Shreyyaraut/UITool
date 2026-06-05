import { useState } from "react";
import { FiMonitor } from "react-icons/fi";

interface DeviceInfoOption {
  label: string;
}

interface Props {
  deviceInfoOptions: DeviceInfoOption[];
  onClose: () => void;
  onAdd: (selected: DeviceInfoOption[]) => void;
}

export default function DeviceInfoSelectModal({
  deviceInfoOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<DeviceInfoOption[]>([]);

  const toggleDeviceInfo = (option: DeviceInfoOption) => {
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
          <h3>Select Device Info</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="device-info-preview-list">
          {deviceInfoOptions.map((option) => (
            <label
              key={option.label}
              className="device-info-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() => toggleDeviceInfo(option)}
              />

              <div className="device-info-card">
                <div className="device-info-icon">
                  <FiMonitor />
                </div>

                <div className="device-info-content">
                  <h4>Device Info</h4>
                  <p>About device information</p>
                </div>
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