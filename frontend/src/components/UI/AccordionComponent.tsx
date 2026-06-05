import {
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function AccordionComponent({
  item,
}: Props) {
  const isOpen =
    item.accordionVariant === "open";

  return (
    <div className="accordion-wrapper">
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
            This is a sample text for the accordion
            section that can be used to provide a brief
            introduction about an individual, brand, or
            business.
          </p>
        )}
      </div>
    </div>
  );
}