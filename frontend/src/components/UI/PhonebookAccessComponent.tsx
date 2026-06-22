export default function PhonebookAccessComponent() {
  return (
    <div className="phonebook-access-screen">
      <div className="phonebook-access-overlay"></div>

      <div className="phonebook-access-sheet">
        <h3>Phonebook Access</h3>

        <p>
          Digi Khata needs access to your contacts to
          help you send money quickly to people you
          know. This is only to find people. We will not
          text, notify or share your contacts without
          your permission.
        </p>

        <button type="button">
          Proceed
        </button>
      </div>
    </div>
  );
}