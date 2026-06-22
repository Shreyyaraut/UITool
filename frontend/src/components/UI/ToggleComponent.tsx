import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ToggleComponent({ item }: Props) {
  const isSmall = item.toggleSize === "small";

  return (
    <div
      className={`toggle-chip-row ${
        isSmall ? "small" : ""
      }`}
    >
      <button className="toggle-chip active">
        Components
      </button>

      <button className="toggle-chip">
        Home
      </button>

      <button className="toggle-chip">
        Profile
      </button>
    </div>
  );
}