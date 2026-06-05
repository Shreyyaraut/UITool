import { useState } from "react";
import type { UIComponent } from "../types";

interface ImageSliderSkeletonOption {
  label: string;
  imageSliderSkeletonVariant:
    UIComponent["imageSliderSkeletonVariant"];
}

interface Props {
  imageSliderSkeletonOptions: ImageSliderSkeletonOption[];
  onClose: () => void;
  onAdd: (
    selected: ImageSliderSkeletonOption[]
  ) => void;
}

export default function ImageSliderSkeletonSelectModal({
  imageSliderSkeletonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    ImageSliderSkeletonOption[]
  >([]);

  const toggleSkeleton = (
    option: ImageSliderSkeletonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.imageSliderSkeletonVariant ===
          option.imageSliderSkeletonVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.imageSliderSkeletonVariant !==
            option.imageSliderSkeletonVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Image Slider Skeleton</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="image-slider-skeleton-preview-list">
          {imageSliderSkeletonOptions.map((option) => (
            <label
              key={option.imageSliderSkeletonVariant}
              className="image-slider-skeleton-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.imageSliderSkeletonVariant ===
                    option.imageSliderSkeletonVariant
                )}
                onChange={() =>
                  toggleSkeleton(option)
                }
              />

              <div className="image-slider-skeleton-wrapper modal-image-slider-skeleton-preview">
                <h4>{option.label}</h4>

                <div
                  className={`image-slider-skeleton-box ${
                    option.imageSliderSkeletonVariant ||
                    "light"
                  }`}
                ></div>

                <div className="image-slider-skeleton-dots">
                  <span
                    className={
                      option.imageSliderSkeletonVariant ||
                      "light"
                    }
                  ></span>
                  <span
                    className={
                      option.imageSliderSkeletonVariant ||
                      "light"
                    }
                  ></span>
                  <span
                    className={
                      option.imageSliderSkeletonVariant ||
                      "light"
                    }
                  ></span>
                </div>
              </div>
            </label>
          ))}
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