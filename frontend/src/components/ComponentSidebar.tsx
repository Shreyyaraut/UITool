import {
  FiPlus,
  FiSearch,
  FiDownload,
} from "react-icons/fi";
import { componentGroups } from "../data/components";

interface Props {
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
  openGroupModal: (groupIndex: number) => void;
  downloadPng: () => void;
}

export default function ComponentSidebar({
  search,
  setSearch,
  openGroupModal,
  downloadPng,
}: Props) {
  const filteredGroups = componentGroups.filter(
    (group) =>
      group.category
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      group.options.some((item) =>
        item.label
          .toLowerCase()
          .includes(search.toLowerCase())
      )
  );

  return (
    <div className="components-panel">
      <div className="sidebar-header">
        <h2 className="section-title">
          Components
        </h2>

        <button
          type="button"
          className="download-btn"
          onClick={downloadPng}
        >
          <FiDownload />
          Download UI
        </button>
      </div>

      <div className="search-box">
        <FiSearch />

        <input
          type="text"
          placeholder="Search component..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />
      </div>

      <div className="component-list">
        {filteredGroups.map((group) => {
          const groupIndex =
            componentGroups.findIndex(
              (item) =>
                item.category === group.category
            );

          return (
            <div
              className="component-item"
              key={group.category}
            >
              <span>{group.category}</span>

              <button
                type="button"
                onClick={() =>
                  openGroupModal(groupIndex)
                }
              >
                <FiPlus />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}