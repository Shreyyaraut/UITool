export default function HorizontalStepperComponent() {
  return (
    <div className="horizontal-stepper">
      <div className="horizontal-step active done">
        <span>✓</span>
        <p>Step</p>
      </div>

      <div className="horizontal-line active"></div>

      <div className="horizontal-step active done">
        <span>✓</span>
        <p>Step</p>
      </div>

      <div className="horizontal-line active"></div>

      <div className="horizontal-step current">
        <span>3</span>
        <p>Step</p>
      </div>
    </div>
  );
}