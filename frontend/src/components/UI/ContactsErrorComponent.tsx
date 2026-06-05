import {
  FiArrowLeft,
  FiSearch,
} from "react-icons/fi";

export default function ContactsErrorComponent() {
  return (
    <div className="contacts-error-screen">
      <div className="contacts-error-header">
        <FiArrowLeft />
        <span>My Contacts</span>
      </div>

      <div className="contacts-error-search">
        <FiSearch />

        <input
          type="text"
          value="Pranav"
          readOnly
        />
      </div>

      <div className="contacts-error-message">
        No matching contacts found
      </div>
    </div>
  );
}