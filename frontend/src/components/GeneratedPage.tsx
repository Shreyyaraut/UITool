import type { SavedPage } from "../types";
import CanvasItem from "./CanvasItem";

interface Props {
  page: SavedPage;
}

export default function GeneratedPage({
  page,
}: Props) {
  return (
    <div className="generated-preview-page">
      <div className="mobile-frame generated-mobile-frame">
        <div className="mobile-header"></div>

        <div className="mobile-screen">
          {page.components.map((item) => (
            <CanvasItem
              key={item.id}
              item={item}
              deleteComponent={() => {}}
              editComponent={() => {}}
              selectedId={null}
              setSelectedId={() => {}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}