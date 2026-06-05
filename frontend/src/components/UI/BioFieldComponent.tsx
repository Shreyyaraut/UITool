import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function BioFieldComponent({
  item,
}: Props) {
  return (
    <div className="biofield-wrapper">
      <label className="biofield-label">
        First name
      </label>

      <textarea
        className="preview-biofield"
        placeholder={
          item.placeholder || "Bio"
        }
        readOnly
      />
    </div>
  );
}