import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function CheckboxComponent({ item }: Props) {
  const isChecked =
    item.checkboxVariant === "checked";

  return (
    <label className="checkbox-wrapper">
      <input
        type="checkbox"
        checked={isChecked}
        readOnly
      />

      <span>Accept Terms</span>
    </label>
  );
}