import { FiPhone } from "react-icons/fi";

export default function FundTransferComponent() {
  const details = [
    {
      label: "Updated On",
      value: "12:38 PM | 30 May 2026",
    },
    {
      label: "Comments",
      value: "Fund transfer to Test",
    },
    {
      label: "Amount",
      value: "₹100",
      type: "success",
    },
    {
      label: "Pending Amount",
      value: "₹100",
      type: "error",
    },
  ];

  return (
    <div className="fund-transfer-screen">
      <div className="fund-transfer-card">
        <div className="fund-transfer-header">
          <h4>Test</h4>

          <div className="fund-transfer-phone">
            <span>
              <FiPhone />
            </span>
            <strong>+91 9898989898</strong>
          </div>
        </div>

        <div className="fund-transfer-dark-divider"></div>

        <div className="fund-transfer-list">
          {details.map((item) => (
            <div
              className="fund-transfer-row"
              key={item.label}
            >
              <span>{item.label}</span>

              <strong
                className={
                  item.type === "success"
                    ? "success"
                    : item.type === "error"
                    ? "error"
                    : ""
                }
              >
                {item.value}
              </strong>
            </div>
          ))}
        </div>

        <button
          type="button"
          className="fund-transfer-btn"
        >
          Update
        </button>
      </div>
    </div>
  );
}