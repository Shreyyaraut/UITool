import { useState } from "react";
import { FiFilePlus } from "react-icons/fi";
import type { UIComponent } from "../types";

interface FileUploadOption {
  label: string;
  fileUploadVariant:
    UIComponent["fileUploadVariant"];
}

interface Props {
  fileUploadOptions: FileUploadOption[];
  onClose: () => void;
  onAdd: (selected: FileUploadOption[]) => void;
}

export default function FileUploadSelectModal({
  fileUploadOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    FileUploadOption[]
  >([]);

  const toggleFileUpload = (
    option: FileUploadOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.fileUploadVariant ===
          option.fileUploadVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.fileUploadVariant !==
            option.fileUploadVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select File Upload</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="file-upload-preview-list">
          {fileUploadOptions.map((option) => (
            <label
              key={option.fileUploadVariant}
              className="file-upload-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.fileUploadVariant ===
                    option.fileUploadVariant
                )}
                onChange={() =>
                  toggleFileUpload(option)
                }
              />

              <div
                className={`file-upload-box ${
                  option.fileUploadVariant || "default"
                }`}
              >
                <FiFilePlus />

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