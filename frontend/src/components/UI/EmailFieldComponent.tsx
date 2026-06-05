import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function EmailFieldComponent({
  item,
}: Props) {
  const variant =
    item.emailFieldVariant || "default";

  const value =
    variant === "filled"
      ? item.label
      : "";

  return (
    <div className="emailfield-wrapper">
      <label className="emailfield-label">
        Email Address
      </label>

      <input
        className={`preview-emailfield ${variant}`}
        type="email"
        placeholder="you@example.com"
        value={value}
        readOnly
      />

      {variant === "error" && (
        <span className="emailfield-error">
          Please enter a valid email address
        </span>
      )}
    </div>
  );
}