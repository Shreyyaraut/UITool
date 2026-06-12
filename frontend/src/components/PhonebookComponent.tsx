import type { UIComponent } from "../types";

interface Props {
  item: UIComponent;
}

export default function PhonebookComponent({ item }: Props) {
  const variant = item.phonebookVariant || "sendMoney";

  if (variant === "sendMoney") {
    return (
      <div className="phonebook-wrapper">
        <button className="phonebook-back-btn">
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

        <h2 className="phonebook-title">Send Money</h2>
        <p className="phonebook-subtitle">
          Send money to your friends and family members
          using mobile number
        </p>

        <div className="phonebook-form">
          <label className="phonebook-field-label">
            Phone Number
          </label>
          <div className="phonebook-phone-row">
            <div className="phonebook-country-code">
              <span className="phonebook-flag">🇮🇳</span>
              <span>+91</span>
              <span className="phonebook-caret">▼</span>
            </div>
            <div className="phonebook-phone-input">
              <span className="phonebook-input-placeholder">
                Phone Number
              </span>
            </div>
          </div>

          <label className="phonebook-field-label">
            First name
          </label>
          <div className="phonebook-text-input">
            <span className="phonebook-rupee-prefix">₹</span>
          </div>

          <button className="phonebook-next-btn" disabled>
            Next
          </button>
        </div>
      </div>
    );
  }

  // access variant
  return (
    <div className="phonebook-access-wrapper">
      <div className="phonebook-access-overlay" />
      <div className="phonebook-access-sheet">
        <h3 className="phonebook-access-title">
          Phonebook Access
        </h3>
        <p className="phonebook-access-desc">
          Digi Khata needs access to your contacts to help
          you send money quickly to people you know. This is
          only to find people. We will not text, notify or
          share your contacts without your permission.
        </p>
        <button className="phonebook-access-btn">
          Proceed
        </button>
      </div>
    </div>
  );
}