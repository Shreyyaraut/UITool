import { FiInfo } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function CvvFieldComponent({
  item,
}: Props) {
  return (
    <div className="cvvfield-wrapper">
      <label className="cvvfield-label">
        {item.label || "CVC / CVV"}
      </label>

      <div className="preview-cvvfield">
        <input
          type="text"
          placeholder={
            item.placeholder || "123"
          }
          readOnly
        />

        <FiInfo />
      </div>
    </div>
  );
}