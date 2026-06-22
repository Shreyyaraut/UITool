import { FiArrowLeft } from "react-icons/fi";

export default function ReadOnlyFormComponent() {
  const formData = [
    { label: "First Name", value: "Pranav" },
    { label: "Last Name", value: "Jadhav" },
    { label: "Email", value: "pranavjadhav@gmail.com" },
    { label: "Phone Number", value: "+91 9898989898" },
    { label: "State", value: "Maharashtra" },
    { label: "City", value: "Mumbai" },
  ];

  return (
    <div className="readonly-form-screen">
      <div className="readonly-form-header">
        <FiArrowLeft />
        <span>Profile</span>
      </div>

      <div className="readonly-form-list">
        {formData.map((item) => (
          <div
            className="readonly-form-item"
            key={item.label}
          >
            <p>{item.label}</p>
            <h4>{item.value}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}