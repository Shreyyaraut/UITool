import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function SwitchButtonComponent({ item }: Props) {
  const variant = item.switchButtonVariant || "off";

  return (
    <div className="switch-button-row">
      <span className="switch-button-label">Dark Mode</span>
      <div
        className={`switch-button-track ${
          variant === "on" ? "switch-on" : "switch-off"
        }`}
      >
        <div className="switch-button-thumb" />
      </div>
    </div>
  );
}