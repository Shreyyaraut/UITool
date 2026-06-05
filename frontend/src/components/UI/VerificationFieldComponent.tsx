import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function VerificationFieldComponent({
  item,
}: Props) {
  return (
    <div className="verificationfield-wrapper">
      <label className="verificationfield-label">
        Verification Code
      </label>

      <input
        className="preview-verificationfield"
        type="text"
        placeholder={
          item.placeholder || "Verification Code"
        }
        readOnly
      />
    </div>
  );
}