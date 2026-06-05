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