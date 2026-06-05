import { useState } from "react";
import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import type { UIComponent } from "../types";

interface AccordionOption {
  label: string;
  accordionVariant: UIComponent["accordionVariant"];
}

interface Props {
  accordionOptions: AccordionOption[];
  onClose: () => void;
  onAdd: (selected: AccordionOption[]) => void;
}

export default function AccordionSelectModal({
  accordionOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    AccordionOption[]
  >([]);

  const toggleAccordion = (
    option: AccordionOption
  ) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) =>
          item.accordionVariant ===
          option.accordionVariant
      );

      if (exists) {
        return prev.filter(
          (item) =>
            item.accordionVariant !==
            option.accordionVariant
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Accordion</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="accordion-preview-list">
          {accordionOptions.map((option) => {
            const isOpen =
              option.accordionVariant === "open";

            return (
              <label
                key={option.accordionVariant}
                className="accordion-preview-option"
              >
                <input
                  type="checkbox"
                  checked={selected.some(
                    (item) =>
                      item.accordionVariant ===
                      option.accordionVariant
                  )}
                  onChange={() =>
                    toggleAccordion(option)
                  }
                />

                <div className="accordion-wrapper modal-accordion-preview">
                  <div className="accordion-item">
                    <div className="accordion-header">
                      <span>View content</span>

                      {isOpen ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </div>

                    {isOpen && (
                      <p className="accordion-content">
                        This is a sample text for the
                        accordion section that can be used
                        to provide a brief introduction about
                        an individual, brand, or business.
                      </p>
                    )}
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