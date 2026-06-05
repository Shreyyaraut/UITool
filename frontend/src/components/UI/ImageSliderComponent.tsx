import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function ImageSliderComponent({
  item,
}: Props) {
  const isRounded =
    item.imageSliderVariant === "rounded";

  return (
    <div className="image-slider-wrapper">
      <img
        className={`image-slider-img ${
          isRounded ? "rounded" : ""
        }`}
        src="./src/assets/appimg.jpg"
        alt="Mountain"
      />

      <div className="slider-dots">
        <span className="active"></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}