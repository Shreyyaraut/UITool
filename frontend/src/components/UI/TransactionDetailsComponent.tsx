import { FiMaximize2 } from "react-icons/fi";

export default function TransactionDetailsComponent() {
  const details = [
    {
      label: "Amount",
      value: "₹64,000",
      active: true,
    },
    {
      label: "Date",
      value: "4 March 2026",
    },
    {
      label: "Product",
      value: "Money Transfer",
    },
    {
      label: "Service",
      value: "Financial Service",
    },
    {
      label: "Number of transactions",
      value: "2",
    },
    {
      label: "Total Commission",
      value: "₹1597.40",
    },
  ];

  return (
    <div className="transaction-details-screen">
      <div className="transaction-details-card">
        <div className="transaction-details-expand">
          <FiMaximize2 />
        </div>

        <div className="transaction-details-list">
          {details.map((item) => (
            <div
              className="transaction-details-row"
              key={item.label}
            >
              <span>{item.label}</span>

              <strong
                className={item.active ? "active" : ""}
              >
                {item.value}
              </strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}