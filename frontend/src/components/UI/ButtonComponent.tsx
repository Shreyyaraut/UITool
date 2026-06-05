import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ButtonComponent({
  item,
}: Props) {
  return (
    <button
      disabled={
        item.buttonVariant === "disabled"
      }
      className={`preview-button ${
        item.buttonVariant || "primary"
      }`}
    >
      {item.buttonVariant === "loading"
        ? ""
        : item.label}
    </button>
  );
}