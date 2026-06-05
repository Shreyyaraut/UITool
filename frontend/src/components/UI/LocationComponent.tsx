import { FiArrowLeft } from "react-icons/fi";

export default function LocationComponent() {
  const locationData = [
    {
      label: "City",
      value: "Mumbai",
    },
    {
      label: "State",
      value: "Maharashtra",
    },
    {
      label: "Country",
      value: "India",
    },
    {
      label: "Pin Code",
      value: "400064",
    },
    {
      label: "Latitude",
      value: "28.282828",
    },
    {
      label: "Longitude",
      value: "82.828282",
    },
  ];

  return (
    <div className="location-screen">
      <div className="location-header">
        <FiArrowLeft />
        <span>My Location</span>
      </div>

      <div className="location-list">
        {locationData.map((item) => (
          <div
            className="location-item"
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