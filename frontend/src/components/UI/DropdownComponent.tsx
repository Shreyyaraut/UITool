import { FiChevronDown } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function DropdownComponent({
  item,
}: Props) {
  const isDisabled =
    item.dropdownVariant === "disabled";

  return (
    <div
      className={`preview-dropdown ${
        isDisabled ? "disabled" : ""
      }`}
    >
      <span>
        {isDisabled ? "Disabled" : "Select"}
      </span>

      <FiChevronDown />
    </div>
  );
}