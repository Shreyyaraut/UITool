import { FiArrowLeft } from "react-icons/fi";

export default function DeviceConfigurationComponent() {
  const configData = [
    { label: "Brand", value: "Xiaomi" },
    { label: "Model", value: "Redmi Note 7 Pro" },
    { label: "Device Id", value: "Violet" },
    { label: "OS", value: "Android 10" },
    { label: "Tablet", value: "No" },
    { label: "App Version", value: "1.0" },
    { label: "Build Number", value: "1" },
    { label: "Safe Insets Top", value: "0" },
    { label: "Safe Insets Bottom", value: "0" },
    { label: "Safe Insets Left", value: "0" },
    { label: "Safe Insets Right", value: "0" },
  ];

  return (
    <div className="device-config-screen">
      <div className="device-config-header">
        <FiArrowLeft />
        <span>Device Configuration</span>
      </div>

      <div className="device-config-list">
        {configData.map((item) => (
          <div
            className="device-config-item"
            key={item.label}
          >
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}