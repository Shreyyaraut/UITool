export default function DropdownListComponent() {
  const cities = [
    "Agra",
    "Ahmedabad",
    "Ajmer",
    "Aligarh",
    "Amritsar",
    "Bengaluru",
    "Bhopal",
  ];

  return (
    <div className="dropdown-list-wrapper">
      <div className="dropdown-list-overlay"></div>

      <div className="dropdown-list-sheet">
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