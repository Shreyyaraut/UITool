import { FiArrowLeft } from "react-icons/fi";

export default function PhonebookComponent() {
  return (
    <div className="phonebook-screen">
      <div className="phonebook-header">
        <FiArrowLeft />
      </div>

      <div className="phonebook-content">
        <h3>Send Money</h3>

        <p>
          Send money to your friends and family members
          using mobile number
        </p>

        <label className="phonebook-label">
          Phone Number
        </label>

        <div className="phonebook-phone-field">
          {/* <div className="phonebook-country">
            <span>🇮🇳</span>
            <strong>+91</strong>
            <span className="phonebook-caret">▾</span>
          </div> */}

          <input
            type="text"
            placeholder="Phone Number"
            readOnly
          />
        </div>

        <label className="phonebook-label">
          First name
        </label>

        <div className="phonebook-input-field">
          <span>₹</span>
        </div>

        <button
          type="button"
          className="phonebook-next-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
}