import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ToggleButtonComponent({
  item,
}: Props) {
  const variant = item.toggleVariant || "twoLeft";

  if (variant === "twoLeft" || variant === "twoRight") {
    return (
      <div className="toggle-wrapper two">
        <button
          className={
            variant === "twoLeft" ? "active" : ""
          }
        >
          Selected
        </button>

        <button
          className={
            variant === "twoRight" ? "active" : ""
          }
        >
          {variant === "twoRight"
            ? "Selected"
            : "Unselected"}
        </button>
      </div>
    );
  }

  const active =
    variant === "threeLeft"
      ? "Left"
      : variant === "threeCenter"
      ? "Center"
      : variant === "threeRight"
      ? "Right"
      : "all";

  return (
    <div
      className={`toggle-wrapper three ${
        variant === "threeFull" ? "full" : ""
      }`}
    >
      {["Left", "Center", "Right"].map((label) => (
        <button
          key={label}
          className={
            active === label || active === "all"
              ? "active"
              : ""
          }
        >
          {label}
        </button>
      ))}
    </div>
  );
}