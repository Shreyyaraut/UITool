export default function VerticalStepperComponent() {
  const steps = [
    {
      label: "Business Details",
      status: "completed",
    },
    {
      label: "Author Verification",
      status: "completed",
    },
    {
      label: "Aadhaar Verification",
      status: "completed",
    },
    {
      label: "Document Upload",
      status: "active",
    },
    {
      label: "Reference Admin Verification",
      status: "disabled",
    },
    {
      label: "Bank Verification",
      status: "disabled",
    },
  ];

  return (
    <div className="vertical-stepper">
      {steps.map((step, index) => (
        <div
          className={`stepper-item ${step.status}`}
          key={step.label}
        >
          <div className="stepper-left">
            <span className="stepper-dot"></span>

            {index !== steps.length - 1 && (
              <span className="stepper-line"></span>
            )}
          </div>

          <span className="stepper-label">
            {step.label}
          </span>
        </div>
      ))}
    </div>
  );
}