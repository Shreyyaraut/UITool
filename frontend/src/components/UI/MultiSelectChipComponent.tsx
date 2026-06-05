import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function MultiSelectChipComponent({
  item,
}: Props) {
  const isSelected =
    item.multiSelectChipVariant === "selected";

  return (
    <div className="multi-chip-group">
      {[1, 2, 3].map((chip) => (
        <span
          key={chip}
          className={`multi-chip ${
            isSelected ? "selected" : "default"
          }`}
        >
          {isSelected ? "Selected" : "Default"}
        </span>
      ))}
    </div>
  );
}