import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function StepperSkeletonComponent({
  item,
}: Props) {
  const variant =
    item.stepperSkeletonVariant || "light";

  return (
    <div className="stepper-skeleton-wrapper">
      <h4>Accordion Skeleton</h4>

      <div className="stepper-skeleton-row">
        {[1, 2, 3].map((step) => (
          <div
            key={step}
            className="stepper-skeleton-item"
          >
            <span
              className={`stepper-skeleton-dot ${variant}`}
            ></span>

            <span
              className={`stepper-skeleton-bar ${variant}`}
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
}