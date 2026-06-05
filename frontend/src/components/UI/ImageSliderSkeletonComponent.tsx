import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ImageSliderSkeletonComponent({
  item,
}: Props) {
  const variant =
    item.imageSliderSkeletonVariant || "light";

  return (
    <div className="image-slider-skeleton-wrapper">
      <h4>Image Slider Skeleton</h4>

      <div
        className={`image-slider-skeleton-box ${variant}`}
      ></div>

      <div className="image-slider-skeleton-dots">
        <span className={variant}></span>
        <span className={variant}></span>
        <span className={variant}></span>
      </div>
    </div>
  );
}