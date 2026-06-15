// import { FiChevronDown } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function PhoneNumberFieldComponent({
  item,
}: Props) {
  return (
    <div className="phonefield-wrapper">
      <label className="phonefield-label">
        {/* {item.label || "Phone Number"} */}
        { "Phone Number" }
      </label>

      <div className="preview-phonefield">
        <div className="phone-country">
          {/* <span className="phone-flag">🇮🇳</span> */}
          {/* <span>+91</span>
          <FiChevronDown /> */}
        </div>

        {/* <div className="phone-divider"></div> */}

        <input
          type="text"
          placeholder={
            item.placeholder || "Phone Number"
          }
          readOnly
        />
      </div>
    </div>
  );
}