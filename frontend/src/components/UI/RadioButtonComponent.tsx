import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function RadioButtonComponent({
  item,
}: Props) {
  const selected =
    item.radioVariant || "female";

  return (
    <div className="radio-wrapper">
      <label className="radio-option">
        <input
          type="radio"
          checked={selected === "male"}
          readOnly
        />
        <span>Male</span>
      </label>

      <label className="radio-option">
        <input
          type="radio"
          checked={selected === "female"}
          readOnly
        />
        <span>Female</span>
      </label>
    </div>
  );
}