import type { UIComponent } from "../types";

interface Props {
  item: UIComponent;
}

export default function TransactionComponent({ item }: Props) {
  const variant = item.transactionVariant || "pin";

  const pinDots = [true, true, true, true, false, false];

  if (variant === "pin" || variant === "pinError") {
    return (
      <div className="transaction-wrapper">
        {variant === "pinError" && (
          <div className="transaction-fraud-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Beware of fraudulent calls</span>
          </div>
        )}

        <div className="transaction-icon-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="23 4 23 10 17 10" />
            <path d="M20.49 15a9 9 0 1 1-.88-3.47" />
          </svg>
        </div>

        <h3 className="transaction-title">
          Enter Transaction PIN
        </h3>
        <p className="transaction-subtitle">
          Enter your 6 digit PIN to proceed
        </p>

        <div className="transaction-pin-dots">
          {pinDots.map((filled, i) => (
            <div
              key={i}
              className={`transaction-pin-dot ${
                filled ? "filled" : i === 4 ? "active" : ""
              }`}
            >
              {filled && (
                <span className="transaction-pin-dot-fill" />
              )}
              {i === 4 && !filled && (
                <span className="transaction-pin-cursor">|</span>
              )}
            </div>
          ))}
        </div>

        <div className="transaction-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button key={n} className="transaction-key">
              {n}
            </button>
          ))}
          <button className="transaction-key">Clear</button>
          <button className="transaction-key">0</button>
          <button className="transaction-key">Delete</button>
        </div>

        <button className="transaction-confirm-btn" disabled>
          Confirm Transaction
        </button>
      </div>
    );
  }

  if (variant === "upi" || variant === "upiError") {
    return (
      <div className="transaction-wrapper">
        {variant === "upiError" && (
          <div className="transaction-fraud-banner">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.99 12 19.79 19.79 0 0 1 2.09 3.18 2 2 0 0 1 4.11 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Beware of fraudulent calls</span>
          </div>
        )}

        <div className="transaction-avatar-circle">
          <span>PK</span>
        </div>
        <h3 className="transaction-title">
          Paying Prathamesh Kumbhar
        </h3>
        <p className="transaction-subtitle">
          9898989898@digikhata
        </p>
        <p className="transaction-amount">₹100</p>

        <div className="transaction-upi-dots">
          {pinDots.map((filled, i) => (
            <div
              key={i}
              className={`transaction-upi-dot ${
                filled ? "filled" : ""
              }`}
            />
          ))}
        </div>

        <div className="transaction-keypad">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
            <button key={n} className="transaction-key">
              {n}
            </button>
          ))}
          <button className="transaction-key">Clear</button>
          <button className="transaction-key">0</button>
          <button className="transaction-key">Delete</button>
        </div>

        <button className="transaction-confirm-btn" disabled>
          Confirm Transaction
        </button>
      </div>
    );
  }

  return null;
}