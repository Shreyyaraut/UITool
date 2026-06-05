import { FiArrowLeft } from "react-icons/fi";

export default function DateNumberFormattingComponent() {
  const rows = [
    {
      label: "Current Date",
      value: "June 2, 2026",
    },
    {
      label: "Price",
      value: "₹ 1,499.99",
    },
    {
      label: "Growth",
      value: "12.4%",
    },
  ];

  return (
    <div className="date-number-screen">
      <div className="date-number-header">
        <FiArrowLeft />
      </div>

      <div className="date-number-list">
        {rows.map((row) => (
          <div
            className="date-number-row"
            key={row.label}
          >
            <span>{row.label}</span>
            <strong>{row.value}</strong>
          </div>
        ))}
      </div>
    </div>
  );
}