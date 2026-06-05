import type { UIComponent } from "../../types";

interface Props {
  item: UIComponent;
}

export default function DobFieldComponent({
  item,
}: Props) {
  return (
    <div className="dobfield-wrapper">
      <label className="dobfield-label">
        Date of Birth
      </label>

      <input
        className="preview-dobfield"
        type="text"
        placeholder={
          item.placeholder || "DD/MM/YYYY"
        }
        readOnly
      />
    </div>
  );
}