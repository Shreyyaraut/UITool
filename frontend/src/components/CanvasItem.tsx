import { FiEdit, FiTrash2 } from "react-icons/fi";

import type { UIComponent } from "../types";
import RenderComponent from "./RenderComponent";

interface Props {
  item: UIComponent;

  deleteComponent: (id: string) => void;
  editComponent: (id: string) => void;

  selectedId: string | null;

  setSelectedId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

export default function CanvasItem({
  item,
  deleteComponent,
  editComponent,
  selectedId,
  setSelectedId,
}: Props) {
  const isSelected = selectedId === item.id;

  const isOverlayComponent =
    item.type === "sideMenu" ||
    item.type === "dropdownList" ||
    item.type === "actionSheet" ||
    item.type === "actionSheetImage" ||
    item.type === "selectionActionSheet" ||
    item.type === "biometric" ||
    item.type === "language" ||
    item.type === "navigation";
  return (
    <div
      className={`canvas-component ${isSelected ? "active-component" : ""
        } ${isOverlayComponent ? "overlay-component" : ""}`}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedId(item.id);
      }}
      style={
        isOverlayComponent
          ? {
            width: "100%",
            height: "100%",
            marginBottom: 0,
          }
          : {
            width: "100%",
            marginBottom: "16px",
          }
      }
    >
      {isSelected && (
        <div className="component-actions">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              editComponent(item.id);
            }}
          >
            <FiEdit />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              deleteComponent(item.id);
            }}
          >
            <FiTrash2 />
          </button>
        </div>
      )}

      <RenderComponent item={item} />
    </div>
  );
}