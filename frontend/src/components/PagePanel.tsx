import {
  FiPlus,
  FiTrash2,
} from "react-icons/fi";
import type { SavedPage } from "../types";

interface Props {
  pages: SavedPage[];
  currentPageId: string | null;
  onNewPage: () => void;
  onSavePage: () => void;
  onSelectPage: (id: string) => void;
  onDeletePage: (id: string) => void;
}

export default function PagePanel({
  pages,
  currentPageId,
  onNewPage,
  onSavePage,
  onSelectPage,
  onDeletePage,
}: Props) {
  return (
    <div className="page-panel">
      <h3>Pages</h3>

      <button
        type="button"
        className="new-page-btn"
        onClick={onNewPage}
      >
        <FiPlus />
        New
      </button>

      <div className="page-panel-list">
        {pages.map((page) => (
          <div
            key={page.pageId}
            className={`page-panel-item ${
              currentPageId === page.pageId
                ? "active"
                : ""
            }`}
          >
            <button
              type="button"
              className="page-name-btn"
              onClick={() =>
                onSelectPage(page.pageId)
              }
            >
              {page.pageName}
            </button>

            <button
              type="button"
              className="page-delete-icon"
              onClick={(e) => {
                e.stopPropagation();
                onDeletePage(page.pageId);
              }}
            >
              <FiTrash2 />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        className="save-page-panel-btn"
        onClick={onSavePage}
      >
        Save Page
      </button>
    </div>
  );
}