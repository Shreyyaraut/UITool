export default function TransactionSuccessComponent() {
  const details = [
    { label: "Transaction Type", value: "Cr" },
    { label: "Amount", value: "₹100", highlight: true },
    { label: "UPI ID", value: "9898989898@digikhata", bold: true },
    { label: "Transaction Id", value: "P122674863", bold: true },
    { label: "Time", value: "12:38 PM | 30 May 2026", bold: true },
  ];

  return (
    <div className="txn-success-wrapper">
      <div className="txn-success-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </div>
      <p className="txn-success-status">Received</p>
      <p className="txn-success-amount">₹100</p>
      <p className="txn-success-upi">9898989898@digikhata</p>

      <div className="txn-success-card">
        {details.map((d) => (
          <div key={d.label} className="txn-success-row">
            <span className="txn-success-row-label">
              {d.label}
            </span>
            <span
              className={`txn-success-row-value ${
                d.bold ? "bold" : ""
              } ${d.highlight ? "highlight" : ""}`}
            >
              {d.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}