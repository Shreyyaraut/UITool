import {
  FiPlus,
  FiSearch,
  FiDownload,
} from "react-icons/fi";
import { componentList } from "../data/components";
import type {
  ComponentType,
  HeadingLevel,
} from "../types";

interface Props {
  search: string;
  setSearch: React.Dispatch<
    React.SetStateAction<string>
  >;
  addComponent: (
    type: ComponentType,
    label: string,
    headingLevel?: HeadingLevel
  ) => void;
  downloadPng: () => void;
}

export default function ComponentSidebar({
  search,
  setSearch,
  addComponent,
  downloadPng,
}: Props) {
  const filteredComponents =
    componentList.filter((item) =>
      item.label
        .toLowerCase()
        .includes(search.toLowerCase())
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
        {filteredComponents.map((item, index) => (
          <div
            className="component-item"
            key={`${item.type}-${item.label}-${index}`}
          >
            <span>{item.label}</span>

            <button
              type="button"
              onClick={() =>
                addComponent(
                  item.type,
                  item.label,
                  item.headingLevel
                )
              }
            >
              <FiPlus />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}