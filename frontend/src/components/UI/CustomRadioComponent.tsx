import { FiUser } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function CustomRadioComponent({
  item,
}: Props) {
  const activeIndex = item.customRadioActive ?? 0;

  return (
    <div className="custom-radio-group">
      {[0, 1, 2].map((index) => (
        <div
          key={index}
          className={`custom-radio-item ${
            activeIndex === index ? "active" : ""
          }`}
        >
          <FiUser />
          <span>Person</span>
        </div>
      ))}
    </div>
  );
}