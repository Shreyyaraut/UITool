import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function OtpFieldComponent({
  item,
}: Props) {
  return (
    <div className="otpfield-wrapper">
      <label className="otpfield-label">
        {/* {item.label || "Enter OTP"} */}
        { "Enter OTP" }
      </label>

      <div className="otp-box-group">
        {[1, 2, 3, 4, 5, 6].map((box) => (
          <input
            key={box}
            className="otp-box"
            type="text"
            maxLength={1}
            readOnly
          />
        ))}
      </div>
    </div>
  );
}