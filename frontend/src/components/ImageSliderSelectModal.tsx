import { useState } from "react";
import type { UIComponent } from "../types";

interface ImageSliderOption {
  label: string;
  imageSliderVariant:
    UIComponent["imageSliderVariant"];
}

interface Props {
  imageSliderOptions: ImageSliderOption[];
  onClose: () => void;
  onAdd: (selected: ImageSliderOption[]) => void;
}

export default function ImageSliderSelectModal({
  imageSliderOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ImageSliderOption[]
  >([]);

  const toggleImageSlider = (
    option: ImageSliderOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.imageSliderVariant ===
          option.imageSliderVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.imageSliderVariant !==
            option.imageSliderVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Image Slider</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="imageslider-preview-list">
          {imageSliderOptions.map((option) => {
            const isRounded =
              option.imageSliderVariant === "rounded";

            return (
              <label
                key={option.imageSliderVariant}
                className="imageslider-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.imageSliderVariant ===
                      option.imageSliderVariant
                  )}
                  onChange={() =>
                    toggleImageSlider(option)
                  }
                />

                <div className="image-slider-wrapper modal-imageslider-preview">
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
              </label>
            );
          })}
        </div>

        <button
          className="heading-add-btn"
          disabled={selected.length === 0}
          onClick={() => onAdd(selected)}
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}