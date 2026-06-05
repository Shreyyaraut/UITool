import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function CardRadioComponent({
  item,
}: Props) {
  const isChecked =
    item.cardRadioVariant === "checked";

  return (
    <div
      className={`cardradio-box ${
        isChecked ? "checked" : ""
      }`}
    >
      <input
        type="radio"
        checked={isChecked}
        readOnly
      />

      <div className="cardradio-content">
        <h4>Bank Name</h4>
        <p>2424242424242424</p>
      </div>
    </div>
  );
}