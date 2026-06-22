import {
  FiArrowLeft,
  FiDownload,
  FiArrowUpRight,
  FiArrowDownLeft,
} from "react-icons/fi";

export default function PassbookComponent() {
  const transactions = [
    {
      type: "paid",
      title: "Paid to Prathamesh Kumbhar",
      amount: "₹100",
    },
    {
      type: "received",
      title: "Received from Harsh Sharma",
      amount: "₹100",
    },
    {
      type: "received",
      title: "Received from Saurabh Pandey",
      amount: "₹100",
    },
    {
      type: "received",
      title: "Received from Rajesh Kumar",
      amount: "₹100",
    },
    {
      type: "paid",
      title: "Paid to Dharmesh Salunke",
      amount: "₹100",
    },
  ];

  return (
    <div className="passbook-screen">
      <div className="passbook-topbar">
        <FiArrowLeft />
        <FiDownload />
      </div>

      <div className="passbook-heading">
        <h3>Passbook</h3>
        <p>All your transactions will be listed here</p>
      </div>

      <div className="passbook-list">
        {transactions.map((item, index) => (
          <div className="passbook-item" key={index}>
            <div
              className={`passbook-icon ${
                item.type === "paid"
                  ? "paid"
                  : "received"
              }`}
            >
              {item.type === "paid" ? (
                <FiArrowUpRight />
              ) : (
                <FiArrowDownLeft />
              )}
            </div>

            <div className="passbook-info">
              <h4>{item.title}</h4>
              <p>12:38 PM | 30 May 2026</p>
            </div>

            <strong
              className={
                item.type === "paid"
                  ? "paid"
                  : "received"
              }
            >
              {item.amount}
            </strong>
          </div>
        ))}
      </div>
    </div>
  );
}