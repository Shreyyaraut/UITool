import { FiX } from "react-icons/fi";

export default function DropdownListComponent() {
  const cities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amritsar",
    "Bengaluru",
    // "Bhopal",
    // "Bhubaneswar",
  ];

  return (
    <div className="dropdown-list-wrapper">
      <div className="dropdown-list-overlay"></div>

      <div className="dropdown-list-sheet">
        <div className="dropdown-list-header">
          <span className="dropdown-list-title">
            Select City
          </span>

          <button className="dropdown-list-close">
            <FiX />
          </button>
        </div>

        {cities.map((city) => (
          <div
            key={city}
            className="dropdown-list-item"
          >
            {city}
          </div>
        ))}
      </div>
    </div>
  );
}