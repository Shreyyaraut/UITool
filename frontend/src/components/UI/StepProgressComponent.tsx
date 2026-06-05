export default function StepProgressComponent() {
  return (
    <div className="step-progress-wrapper">
      <div className="step-progress-bars">
        <span className="active"></span>
        <span className="active"></span>
        <span className="active"></span>
        <span></span>
      </div>

      <div className="step-progress-actions">
        <button>Previous</button>
        <button>Next</button>
      </div>
    </div>
  );
}