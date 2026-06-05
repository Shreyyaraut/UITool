import { useState } from "react";
import { FiArrowLeft } from "react-icons/fi";

interface DeviceConfigurationOption {
  label: string;
}

interface Props {
  deviceConfigurationOptions: DeviceConfigurationOption[];
  onClose: () => void;
  onAdd: (selected: DeviceConfigurationOption[]) => void;
}

export default function DeviceConfigurationSelectModal({
  deviceConfigurationOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    DeviceConfigurationOption[]
  >([]);

  const toggleDeviceConfiguration = (
    option: DeviceConfigurationOption
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

  const configData = [
    ["Brand", "Xiaomi"],
    ["Model", "Redmi Note 7 Pro"],
    ["Device Id", "Violet"],
    ["OS", "Android 10"],
    ["Tablet", "No"],
    ["App Version", "1.0"],
    ["Build Number", "1"],
    ["Safe Insets Top", "0"],
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Device Configuration</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="device-config-preview-list">
          {deviceConfigurationOptions.map((option) => (
            <label
              key={option.label}
              className="device-config-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleDeviceConfiguration(option)
                }
              />

              <div className="device-config-preview-box">
                <div className="device-config-screen">
                  <div className="device-config-header">
                    <FiArrowLeft />
                    <span>Device Configuration</span>
                  </div>

                  <div className="device-config-list">
                    {configData.map(([label, value]) => (
                      <div
                        className="device-config-item"
                        key={label}
                      >
                        <p>{label}</p>
                        <h4>{value}</h4>
                      </div>
                    ))}
                  </div>
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