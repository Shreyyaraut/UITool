import { FiArrowLeft, FiSearch } from "react-icons/fi";

export default function DropdownList2Component() {
  const cities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amritsar",
    "Bengaluru",
    "Bhopal",
    "Bhubaneswar",
    "Chandigarh",
    "Chennai",
    "Coimbatore",
    "Cuttack",
    "Dehradun",
    "Delhi",
  ];

  return (
    <div className="dropdown-list2-wrapper">
      {/* Header */}
      <div className="dropdown-list2-header">
        <button className="dropdown-list2-back">
          <FiArrowLeft />
        </button>

        <span className="dropdown-list2-title">
          Select City
        </span>
      </div>

      {/* Search */}
      <div className="dropdown-list2-search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search"
          readOnly
        />
      </div>

      {/* Cities */}
      {cities.map((city) => (
        <div
          key={city}
          className="dropdown-list2-item"
        >
          {city}
        </div>
      ))}
    </div>
  );
}