import { FiInfo } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function InformationCardComponent({
  item,
}: Props) {
  const showMessage =
    item.informationCardVariant === "withMessage";

  return (
    <div className="info-card">
      <div className="info-card-header">
        <FiInfo />
        <span>Information</span>
      </div>

      {showMessage && (
        <p>This is an information message</p>
      )}
    </div>
  );
}