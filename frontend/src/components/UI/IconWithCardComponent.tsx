import { FiWifi } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function IconWithCardComponent({ item }: Props) {
  const variant = item.iconWithCardVariant || "filled";
  const isFilled = variant === "filled";

  return (
    <div className="icon-with-card-grid">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className={`icon-with-card-item ${
            isFilled ? "filled" : "outlined"
          }`}
        >
          <FiWifi className="icon-with-card-icon" />

          <span className="icon-with-card-label">
            Broadband
          </span>
        </div>
      ))}
    </div>
  );
}