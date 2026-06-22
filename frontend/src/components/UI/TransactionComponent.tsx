export default function TransactionComponent() {
  const pinDots = [1, 2, 3, 4, 5, 6];
  const keys = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "Clear",
    "0",
    "Delete",
  ];

  return (
    <div className="transaction-screen">
      <div className="transaction-content">
        <div className="transaction-avatar">
          PK
        </div>

        <h4>Paying Prathamesh Kumbhar</h4>

        <p>9898989898@digikhata</p>

        <h2>₹100</h2>

        <div className="transaction-pin-row">
          {pinDots.map((dot, index) => (
            <span
              key={dot}
              className={
                index < 4
                  ? "transaction-pin-dot filled"
                  : "transaction-pin-dot"
              }
            ></span>
          ))}
        </div>

        <div className="transaction-keypad">
          {keys.map((key) => (
            <button
              key={key}
              type="button"
              className="transaction-key"
            >
              {key}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="transaction-confirm-btn"
        >
          Confirm Transaction
        </button>
      </div>
    </div>
  );
}