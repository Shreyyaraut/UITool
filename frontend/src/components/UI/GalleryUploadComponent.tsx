import { FiImage } from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function GalleryUploadComponent({
  item,
}: Props) {
  const variant =
    item.galleryUploadVariant || "default";

  return (
    <div
      className={`gallery-upload-box ${variant}`}
    >
      <FiImage />

      <span>Choose from Gallery</span>
    </div>
  );
}