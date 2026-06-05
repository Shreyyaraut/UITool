import {
  FiArrowLeft,
  FiSearch,
  FiUser,
} from "react-icons/fi";

export default function ContactsComponent() {
  const contacts = Array.from(
    { length: 8 },
    (_, index) => ({
      id: index + 1,
      name: "Person Name",
      phone: "+91 9898989898",
    })
  );

  return (
    <div className="contacts-screen">
      <div className="contacts-header">
        <FiArrowLeft />
        <span>My Contacts</span>
      </div>

      <div className="contacts-search">
        <FiSearch />

        <input
          type="text"
          placeholder="Search"
          readOnly
        />
      </div>

      <div className="contacts-list">
        {contacts.map((contact) => (
          <div
            className="contact-item"
            key={contact.id}
          >
            <div className="contact-avatar">
              <FiUser />
            </div>

            <div className="contact-info">
              <h4>{contact.name}</h4>
              <p>{contact.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}