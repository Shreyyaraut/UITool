import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function TextFieldComponent({ item }: Props) {
  const variant = item.textFieldVariant || "placeholder";

  const value =
    variant === "filledFocused" || variant === "filled"
      ? item.label
      : "";

  return (
    <div className="textfield-wrapper">
      <label className="textfield-label">
        First name
      </label>

      <input
        className={`preview-textfield ${variant}`}
        placeholder={
          variant === "placeholder"
            ? item.label
            : ""
        }
        value={value}
        readOnly
      />
    </div>
  );
}