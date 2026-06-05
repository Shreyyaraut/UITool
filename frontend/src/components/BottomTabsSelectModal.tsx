import { useState } from "react";
import { FiHome, FiUser } from "react-icons/fi";

interface BottomTabsOption {
  label: string;
}

interface Props {
  bottomTabsOptions: BottomTabsOption[];
  onClose: () => void;
  onAdd: (selected: BottomTabsOption[]) => void;
}

export default function BottomTabsSelectModal({
  bottomTabsOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] = useState<
    BottomTabsOption[]
  >([]);

  const toggleBottomTabs = (
    option: BottomTabsOption
  ) => {
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
          <h3>Select Bottom Tabs</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="bottom-tabs-preview-list">
          {bottomTabsOptions.map((option) => (
            <label
              key={option.label}
              className="bottom-tabs-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleBottomTabs(option)
                }
              />

              <div className="bottom-tabs-ui modal-bottom-tabs-preview">
                <div className="bottom-tabs-screen">
                  <span>Home Screen</span>
                </div>

                <div className="bottom-tabs-bar">
                  <button
                    type="button"
                    className="bottom-tabs-btn active"
                  >
                    <FiHome />
                    <span>Home</span>
                  </button>

                  <button
                    type="button"
                    className="bottom-tabs-btn"
                  >
                    <FiUser />
                    <span>Profile</span>
                  </button>
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