import { IoMdHome } from "react-icons/io";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function SelectionIconButtonComponent({
  item,
}: Props) {
  const variant =
    item.selectionIconButtonVariant || "default";

  if (variant === "sizes") {
    return (
      <div className="selection-icon-section">
        <h4>Sizes</h4>

        <div className="selection-icon-row sizes">
          <button className="icon-btn small">
            <IoMdHome />
          </button>

          <button className="icon-btn medium">
            <IoMdHome/>
          </button>

          <button className="icon-btn large">
            <IoMdHome />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="selection-icon-section">
      <h4>
        {variant === "selected"
          ? "Selected"
          : variant === "disabled"
          ? "Disabled"
          : "Default"}
      </h4>

      <div className="selection-icon-row">
        {[1].map((item) => (
          <button
            key={item}
            disabled={variant === "disabled"}
            className={`icon-btn ${variant}`}
          >
            <IoMdHome />
          </button>
        ))}
      </div>
    </div>
  );
}