import { forwardRef } from "react";
import type { UIComponent } from "../types";
import CanvasItem from "./CanvasItem";

interface Props {
  components: UIComponent[];
  deleteComponent: (id: string) => void;
  editComponent: (id: string) => void;
  selectedId: string | null;
  setSelectedId: React.Dispatch<
    React.SetStateAction<string | null>
  >;
}

const MobileCanvas = forwardRef<
  HTMLDivElement,
  Props
>(
  (
    {
      components,
      deleteComponent,
      editComponent,
      selectedId,
      setSelectedId,
    },
    ref
  ) => {
    return (
      <div className="mobile-section">
        <div className="mobile-frame" ref={ref}>
          <div className="mobile-header"></div>

          <div
            className="mobile-screen"
            onClick={() => setSelectedId(null)}
          >
            {components.length === 0 && (
              <div className="empty-text">
                Add components from right side
              </div>
            )}

            {components.map((item) => (
              <CanvasItem
                key={item.id}
                item={item}
                deleteComponent={deleteComponent}
                editComponent={editComponent}
                selectedId={selectedId}
                setSelectedId={setSelectedId}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
);

export default MobileCanvas;