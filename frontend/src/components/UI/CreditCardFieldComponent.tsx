import { FiCreditCard } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function CreditCardFieldComponent({
  item,
}: Props) {
  return (
    <div className="creditcardfield-wrapper">
      <label className="creditcardfield-label">
        {item.label || "Credit Card"}
      </label>

      <div className="preview-creditcardfield">
        <FiCreditCard />

        <input
          type="text"
          placeholder={
            item.placeholder ||
            "1234 1234 1234 1234"
          }
          readOnly
        />
      </div>
    </div>
  );
}