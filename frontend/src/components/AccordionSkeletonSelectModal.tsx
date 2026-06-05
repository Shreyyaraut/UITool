import { useState } from "react";

interface AccordionSkeletonOption {
  label: string;
  variant: "light" | "dark";
}

interface Props {
  accordionSkeletonOptions: AccordionSkeletonOption[];
  onClose: () => void;
  onAdd: (
    selected: AccordionSkeletonOption[]
  ) => void;
}

export default function AccordionSkeletonSelectModal({
  accordionSkeletonOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    AccordionSkeletonOption[]
  >([]);

  const toggleSkeleton = (
    option: AccordionSkeletonOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.variant === option.variant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.variant !== option.variant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>
            Select Accordion Skeleton
          </h3>

          <button
            type="button"
            onClick={onClose}
          >
            ×
          </button>
        </div>

        <div className="accordion-skeleton-preview-list">
          {accordionSkeletonOptions.map(
            (option) => (
              <label
                key={option.variant}
                className="accordion-skeleton-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.variant ===
                      option.variant
                  )}
                  onChange={() =>
                    toggleSkeleton(option)
                  }
                />

                <div className="accordion-skeleton-wrapper modal-accordion-skeleton-preview">
                  <SkeletonPreviewBlock
                    variant={option.variant}
                    title={option.label}
                  />
                </div>
              </label>
            )
          )}
        </div>

        <button
          className="heading-add-btn"
          disabled={
            selected.length === 0
          }
          onClick={() =>
            onAdd(selected)
          }
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}

function SkeletonPreviewBlock({
  variant,
  title,
}: {
  variant: "light" | "dark";
  title: string;
}) {
  return (
    <div className="accordion-skeleton-block">
      <h4>{title}</h4>

      <div className="accordion-skeleton-line-divider"></div>

      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="accordion-skeleton-row"
        >
          <span
            className={`accordion-skeleton-bar ${variant}`}
          ></span>

          <span
            className={`accordion-skeleton-dot ${variant}`}
          ></span>
        </div>
      ))}

      <div className="accordion-skeleton-line-divider"></div>
    </div>
  );
}