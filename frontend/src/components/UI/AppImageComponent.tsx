import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

const imageUrl =
  "./src/assets/appimg.jpg";

export default function AppImageComponent({
  item,
}: Props) {
  const variant =
    item.appImageVariant || "square";

  const label =
    variant === "rounded"
      ? "Rounded Image"
      : variant === "circular"
      ? "Circular Image"
      : "Square Image";

  return (
    <div className="app-image-wrapper">
      <img
        src={imageUrl}
        alt={label}
        className={`app-image ${variant}`}
      />

      <span>{label}</span>
    </div>
  );
}