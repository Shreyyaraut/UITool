import { useState } from "react";
import { FiImage } from "react-icons/fi";
import type { UIComponent } from "../types";

interface GalleryUploadOption {
  label: string;
  galleryUploadVariant:
    UIComponent["galleryUploadVariant"];
}

interface Props {
  galleryUploadOptions: GalleryUploadOption[];
  onClose: () => void;
  onAdd: (selected: GalleryUploadOption[]) => void;
}

export default function GalleryUploadSelectModal({
  galleryUploadOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    GalleryUploadOption[]
  >([]);

  const toggleGalleryUpload = (
    option: GalleryUploadOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.galleryUploadVariant ===
          option.galleryUploadVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.galleryUploadVariant !==
            option.galleryUploadVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Gallery Upload</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="gallery-upload-preview-list">
          {galleryUploadOptions.map((option) => (
            <label
              key={option.galleryUploadVariant}
              className="gallery-upload-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.galleryUploadVariant ===
                    option.galleryUploadVariant
                )}
                onChange={() =>
                  toggleGalleryUpload(option)
                }
              />

              <div
                className={`gallery-upload-box ${
                  option.galleryUploadVariant ||
                  "default"
                }`}
              >
                <FiImage />

                <span>{option.label}</span>
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