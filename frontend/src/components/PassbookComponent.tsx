export default function PassbookComponent() {
  const entries = [
    {
      name: "Paid to Prathamesh Kumbhar",
      time: "12:38 PM | 30 May 2026",
      amount: "₹100",
      type: "debit",
    },
    {
      name: "Received from Harsh Sharma",
      time: "12:38 PM | 30 May 2026",
      amount: "₹100",
      type: "credit",
    },
    {
      name: "Received from Saurabh Pandey",
      time: "12:38 PM | 30 May 2026",
      amount: "₹100",
      type: "credit",
    },
    {
      name: "Received from Rajesh Kumar",
      time: "12:38 PM | 30 May 2026",
      amount: "₹100",
      type: "credit",
    },
    {
      name: "Paid to Dharmesh Salunke",
      time: "12:38 PM | 30 May 2026",
      amount: "₹100",
      type: "debit",
    },
  ];

  return (
    <div className="passbook-wrapper">
      <div className="passbook-top-row">
        <button className="passbook-back-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button className="passbook-download-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
        </button>
      </div>

      <h2 className="passbook-title">Passbook</h2>
      <p className="passbook-subtitle">
        All your transactions will be listed here
      </p>

      <div className="passbook-list">
        {entries.map((entry, i) => (
          <div key={i} className="passbook-item">
            <div
              className={`passbook-item-icon ${entry.type}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {entry.type === "debit" ? (
                  <polyline points="7 17 17 7" />
                ) : (
                  <polyline points="17 7 7 17" />
                )}
                {entry.type === "debit" ? (
                  <polyline points="7 7 17 7 17 17" />
                ) : (
                  <polyline points="17 17 7 17 7 7" />
                )}
              </svg>
            </div>
            <div className="passbook-item-info">
              <span className="passbook-item-name">
                {entry.name}
              </span>
              <span className="passbook-item-time">
                {entry.time}
              </span>
            </div>
            <span
              className={`passbook-item-amount ${entry.type}`}
            >
              {entry.amount}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}