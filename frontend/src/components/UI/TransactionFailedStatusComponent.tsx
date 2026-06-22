export default function TransactionFailedStatusComponent() {
  const details = [
    {
      label: "Financial Service",
      value: "₹100",
      status: "failed",
    },
    {
      label: "Account No.",
      value: "9120822185",
    },
    {
      label: "Transaction Id",
      value: "2602111955420317697",
    },
    {
      label: "Time",
      value: "12:38 PM | 30 May 2026",
    },
  ];

  return (
    <div className="transaction-status-screen">
      <div className="transaction-status-card">
        <div className="transaction-status-header">
          <div className="transaction-status-avatar">
            FT
          </div>

          <h4>Fund Transfer</h4>

          <span className="transaction-status-badge failed">
            Failed
          </span>
        </div>

        <div className="transaction-status-list">
          {details.map((item) => (
            <div
              className="transaction-status-row"
              key={item.label}
            >
              <span>{item.label}</span>

              <strong
                className={
                  item.status === "failed"
                    ? "failed"
                    : ""
                }
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