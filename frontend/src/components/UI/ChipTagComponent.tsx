import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ChipTagComponent({
  item,
}: Props) {
  const variant = item.chipVariant || "default";

  return (
    <span className={`chip-tag ${variant}`}>
      {item.label}
    </span>
  );
}