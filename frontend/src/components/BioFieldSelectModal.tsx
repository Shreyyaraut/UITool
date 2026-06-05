import { useState } from "react";

interface BioFieldOption {
  label: string;
  placeholder: string;
}

interface Props {
  bioFieldOptions: BioFieldOption[];
  onClose: () => void;
  onAdd: (selected: BioFieldOption[]) => void;
}

export default function BioFieldSelectModal({
  bioFieldOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    BioFieldOption[]
  >([]);

  const toggleBioField = (
    option: BioFieldOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.placeholder ===
          option.placeholder
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.placeholder !==
            option.placeholder
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Bio Field</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="biofield-preview-list">
          {bioFieldOptions.map((option) => (
            <label
              key={option.placeholder}
              className="biofield-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) =>
                    item.placeholder ===
                    option.placeholder
                )}
                onChange={() =>
                  toggleBioField(option)
                }
              />

              <div className="biofield-wrapper modal-biofield-preview">
                <label className="biofield-label">
                  {option.label}
                </label>

                <textarea
                  className="preview-biofield"
                  placeholder={option.placeholder}
                  readOnly
                />
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