export default function ReadOnlyFormComponent() {
  const fields = [
    { label: "First Name", value: "Pranav" },
    { label: "Last Name", value: "Jadhav" },
    { label: "Email", value: "pranavjadhav@gmail.com" },
    { label: "Phone Number", value: "+91 9898989898" },
    { label: "State", value: "Maharashtra" },
    { label: "City", value: "Mumbai" },
  ];

  return (
    <div className="readonly-form-wrapper">
      <div className="readonly-form-header">
        <button className="readonly-back-btn">
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
        <span className="readonly-form-title">Profile</span>
      </div>

      <div className="readonly-form-body">
        {fields.map((field) => (
          <div key={field.label} className="readonly-form-field">
            <span className="readonly-field-label">
              {field.label}
            </span>
            <span className="readonly-field-value">
              {field.value}
            </span>
            <div className="readonly-field-divider" />
          </div>
        ))}
      </div>
    </div>
  );
}