export default function FundTransferComponent() {
  const transfers = [
    {
      name: "Test",
      phone: "+91 9898989898",
      updatedOn: "12:38 PM | 30 May 2026",
      comments: "Fund transfer to Test",
      amount: "₹100",
      pendingAmount: "₹100",
    },
    {
      name: "Test",
      phone: "+91 9898989898",
      updatedOn: "12:38 PM | 30 May 2026",
      comments: "Fund transfer to Test",
      amount: "₹100",
      pendingAmount: "₹100",
    },
  ];

  return (
    <div className="fund-transfer-wrapper">
      <div className="fund-transfer-header-row">
        <button className="fund-transfer-back-btn">
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
        <span className="fund-transfer-page-title">
          My Fund Transfers
        </span>
      </div>

      <div className="fund-transfer-search-box">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#999"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <span className="fund-transfer-search-placeholder">
          Search for transfer
        </span>
      </div>

      <div className="fund-transfer-list">
        {transfers.map((t, i) => (
          <div key={i} className="fund-transfer-card">
            <div className="fund-transfer-card-top">
              <span className="fund-transfer-name">
                {t.name}
              </span>
              <div className="fund-transfer-phone-row">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#2196F3"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span className="fund-transfer-phone">
                  {t.phone}
                </span>
              </div>
            </div>
            <div className="fund-transfer-divider" />
            <div className="fund-transfer-row">
              <span className="fund-transfer-row-label">
                Updated On
              </span>
              <span className="fund-transfer-row-value">
                {t.updatedOn}
              </span>
            </div>
            <div className="fund-transfer-row">
              <span className="fund-transfer-row-label">
                Comments
              </span>
              <span className="fund-transfer-row-value bold">
                {t.comments}
              </span>
            </div>
            <div className="fund-transfer-row">
              <span className="fund-transfer-row-label">
                Amount
              </span>
              <span className="fund-transfer-row-value green">
                {t.amount}
              </span>
            </div>
            <div className="fund-transfer-row">
              <span className="fund-transfer-row-label">
                Pending Amount
              </span>
              <span className="fund-transfer-row-value red">
                {t.pendingAmount}
              </span>
            </div>
            <button className="fund-transfer-update-btn">
              Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}