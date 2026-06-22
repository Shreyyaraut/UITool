import { FiCheck } from "react-icons/fi";

export default function TransactionSuccessfulComponent() {
  const transactionDetails = [
    {
      label: "Transaction Type",
      value: "Cr",
    },
    {
      label: "Amount",
      value: "₹100",
    },
    {
      label: "UPI ID",
      value: "9898989898@digikhata",
    },
    {
      label: "Transaction Id",
      value: "P122674863",
    },
    {
      label: "Time",
      value: "12:38 PM | 30 May 2026",
    },
  ];

  return (
    <div className="transaction-success-screen">
      <div className="transaction-success-content">
        <div className="transaction-success-icon">
          <FiCheck />
        </div>

        <h3>Received</h3>

        <h2>₹100</h2>

        <p>9898989898@digikhata</p>

        <div className="transaction-success-card">
          {transactionDetails.map((item) => (
            <div
              className="transaction-success-row"
              key={item.label}
            >
              <span>{item.label}</span>
              <strong>{item.value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}