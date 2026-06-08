import {
  FiX,
  FiTrash2,
  FiFileText,
} from "react-icons/fi";

export interface SavedPage {
  id: string;
  name: string;
  createdAt: string;
}

interface Props {
  open: boolean;

  pages: SavedPage[];

  selectedPageId: string | null;

  onSelectPage: (
    pageId: string
  ) => void;

  onDeletePage: (
    pageId: string
  ) => void;

  onClose: () => void;
}

export default function PageSidebar({
  open,
  pages,
  selectedPageId,
  onSelectPage,
  onDeletePage,
  onClose,
}: Props) {
  return (
    <>
      {open && (
        <div
          className="sidebar-overlay"
          onClick={onClose}
        />
      )}

      <div
        className={`page-sidebar ${
          open ? "open" : ""
        }`}
      >
        <div className="page-sidebar-header">
          <h3>Pages</h3>

          <button
            type="button"
            onClick={onClose}
          >
            <FiX />
          </button>
        </div>

        <div className="page-sidebar-list">
          {pages.length === 0 ? (
            <div className="page-empty">
              No pages created
            </div>
          ) : (
            pages.map((page) => (
              <div
                key={page.id}
                className={`page-item ${
                  selectedPageId === page.id
                    ? "active"
                    : ""
                }`}
              >
                <div
                  className="page-item-content"
                  onClick={() =>
                    onSelectPage(page.id)
                  }
                >
                  <FiFileText />

                  <div>
                    <h4>{page.name}</h4>

                    <p>
                      {new Date(
                        page.createdAt
                      ).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  className="page-delete-btn"
                  onClick={() =>
                    onDeletePage(page.id)
                  }
                >
                  <FiTrash2 />
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}