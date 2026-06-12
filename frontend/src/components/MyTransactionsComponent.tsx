import type { UIComponent } from "../types";

interface Props {
  item: UIComponent;
}

export default function MyTransactionsComponent({ item }: Props) {
  const variant = item.myTransactionsVariant || "list";

  if (variant === "list") {
    const txns = [
      {
        initials: "BA",
        name: "Bank Account Validation",
        status: "Success",
        service: "₹100",
        account: "9120822185",
        txnId: "260211955420317697",
        time: "12:38 PM | 30 May 2026",
      },
      {
        initials: "FT",
        name: "Fund Transfer",
        status: "Failed",
        service: "₹100",
        account: "9120822185",
        txnId: "260211955420317697",
        time: "12:38 PM | 30 May 2026",
      },
    ];

    return (
      <div className="my-txn-wrapper">
        <div className="my-txn-header-row">
          <button className="my-txn-back-btn">
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
          <span className="my-txn-page-title">
            My Transactions
          </span>
        </div>

        <div className="my-txn-list">
          {txns.map((t, i) => (
            <div key={i} className="my-txn-card">
              <div className="my-txn-card-top">
                <div className="my-txn-initials-circle">
                  {t.initials}
                </div>
                <span className="my-txn-name">{t.name}</span>
                <span
                  className={`my-txn-status-tag ${
                    t.status === "Success"
                      ? "success"
                      : "failed"
                  }`}
                >
                  {t.status}
                </span>
              </div>
              <div className="my-txn-row">
                <span className="my-txn-row-label">
                  Financial Service
                </span>
                <span className="my-txn-row-value green">
                  {t.service}
                </span>
              </div>
              <div className="my-txn-row">
                <span className="my-txn-row-label">
                  Account No.
                </span>
                <span className="my-txn-row-value">
                  {t.account}
                </span>
              </div>
              <div className="my-txn-row">
                <span className="my-txn-row-label">
                  Transaction Id
                </span>
                <span className="my-txn-row-value">
                  {t.txnId}
                </span>
              </div>
              <div className="my-txn-row">
                <span className="my-txn-row-label">Time</span>
                <span className="my-txn-row-value">
                  {t.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // expanded variant
  const cards = [
    { expanded: false },
    { expanded: true },
  ];

  return (
    <div className="my-txn-wrapper">
      <div className="my-txn-header-row">
        <button className="my-txn-back-btn">
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
        <span className="my-txn-page-title">
          My Transactions
        </span>
      </div>

      <div className="my-txn-list">
        {cards.map((c, i) => (
          <div key={i} className="my-txn-card">
            <div className="my-txn-expand-row">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {c.expanded ? (
                  <>
                    <polyline points="4 14 10 14 10 20" />
                    <polyline points="20 10 14 10 14 4" />
                    <line x1="10" y1="14" x2="3" y2="21" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                  </>
                ) : (
                  <>
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </>
                )}
              </svg>
            </div>
            <div className="my-txn-row">
              <span className="my-txn-row-label">Amount</span>
              <span className="my-txn-row-value blue">
                ₹64,000
              </span>
            </div>
            <div className="my-txn-row">
              <span className="my-txn-row-label">Date</span>
              <span className="my-txn-row-value">
                4 March 2026
              </span>
            </div>
            <div className="my-txn-row">
              <span className="my-txn-row-label">Product</span>
              <span className="my-txn-row-value">
                Money Transfer
              </span>
            </div>
            <div className="my-txn-row">
              <span className="my-txn-row-label">Service</span>
              <span className="my-txn-row-value">
                Financial Service
              </span>
            </div>
            {c.expanded && (
              <>
                <div className="my-txn-row">
                  <span className="my-txn-row-label">
                    Number of transactions
                  </span>
                  <span className="my-txn-row-value">2</span>
                </div>
                <div className="my-txn-row">
                  <span className="my-txn-row-label">
                    Total Commission
                  </span>
                  <span className="my-txn-row-value">
                    ₹1597.40
                  </span>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}