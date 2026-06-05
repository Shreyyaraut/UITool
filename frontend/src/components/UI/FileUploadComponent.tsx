import { FiFilePlus } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function FileUploadComponent({
  item,
}: Props) {
  const variant =
    item.fileUploadVariant || "default";

  return (
    <div
      className={`file-upload-box ${variant}`}
    >
      <FiFilePlus />

      <span>Choose File</span>
    </div>
  );
}