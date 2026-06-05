import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function AccordionSkeletonComponent({
  item,
}: Props) {
  return (
    <div className="accordion-skeleton-wrapper">
      <SkeletonBlock
        variant={
          item.skeletonVariant || "light"
        }
        title={item.label}
      />
    </div>
  );
}

function SkeletonBlock({
  variant,
  title,
}: {
  variant: "light" | "dark";
  title: string;
}) {
  return (
    <div className="accordion-skeleton-block">
      <h4>{title}</h4>

      <div className="accordion-skeleton-line-divider"></div>

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="accordion-skeleton-row"
        >
          <span
            className={`accordion-skeleton-bar ${variant}`}
          ></span>

          <span
            className={`accordion-skeleton-dot ${variant}`}
          ></span>
        </div>
      ))}

      <div className="accordion-skeleton-line-divider"></div>
    </div>
  );
}