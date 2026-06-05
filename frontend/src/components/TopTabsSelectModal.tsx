import { useState } from "react";

interface TopTabsOption {
  label: string;
}

interface Props {
  topTabsOptions: TopTabsOption[];
  onClose: () => void;
  onAdd: (selected: TopTabsOption[]) => void;
}

export default function TopTabsSelectModal({
  topTabsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    TopTabsOption[]
  >([]);

  const toggleTopTabs = (option: TopTabsOption) => {
    setSelected((prev) => {
      const exists = prev.some(
        (item) => item.label === option.label
      );

      if (exists) {
        return prev.filter(
          (item) => item.label !== option.label
        );
      }

      return [...prev, option];
    });
  };

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Top Tabs</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="top-tabs-preview-list">
          {topTabsOptions.map((option) => (
            <label
              key={option.label}
              className="top-tabs-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleTopTabs(option)
                }
              />

              <div className="top-tabs-ui modal-top-tabs-preview">
                <div className="top-tabs-bar">
                  <button
                    type="button"
                    className="top-tabs-btn active"
                  >
                    Home
                  </button>

                  <button
                    type="button"
                    className="top-tabs-btn"
                  >
                    Profile
                  </button>
                </div>

                <div className="top-tabs-screen">
                  <span>Home Screen</span>
                </div>
              </div>
            </label>
          ))}
        </div>

        <button
          className="heading-add-btn"
          disabled={selected.length === 0}
          onClick={() => onAdd(selected)}
        >
          Add Selected
        </button>
      </div>
    </div>
  );
}