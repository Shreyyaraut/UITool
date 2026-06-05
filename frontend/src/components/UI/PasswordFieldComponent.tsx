import { FiEyeOff } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function PasswordFieldComponent({
  item,
}: Props) {
  const variant =
    item.passwordFieldVariant || "default";

  const value =
    variant === "filled"
      ? item.label
      : "";

  return (
    <div className="passwordfield-wrapper">
      <label className="passwordfield-label">
        Password
      </label>

      <div
        className={`preview-passwordfield ${variant}`}
      >
        <input
          type="password"
          placeholder="Password"
          value={value}
          readOnly
        />

        <FiEyeOff />
      </div>

      {variant === "error" && (
        <span className="passwordfield-error">
          Password is required
        </span>
      )}
    </div>
  );
}