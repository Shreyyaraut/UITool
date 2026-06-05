import { useState } from "react";
import { IoMdHome } from "react-icons/io";

interface NavigationOption {
  label: string;
}

interface Props {
  navigationOptions: NavigationOption[];
  onClose: () => void;
  onAdd: (selected: NavigationOption[]) => void;
}

export default function NavigationSelectModal({
  navigationOptions,
  onClose,
  onAdd,
}: Props) {
  const [selected, setSelected] =
    useState<NavigationOption[]>([]);

  const toggleNavigation = (
    option: NavigationOption
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

  const menuItems = [
    "Home",
    "Settings",
    "Profile",
    "Bottom Tabs",
    "Tab View",
  ];

  return (
    <div className="heading-modal-overlay">
      <div className="heading-modal">
        <div className="heading-modal-header">
          <h3>Select Navigation</h3>

          <button type="button" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="navigation-preview-list">
          {navigationOptions.map((option) => (
            <label
              key={option.label}
              className="navigation-preview-option"
            >
              <input
                type="checkbox"
                checked={selected.some(
                  (item) => item.label === option.label
                )}
                onChange={() =>
                  toggleNavigation(option)
                }
              />

              <div className="navigation-preview-box">
                <div className="navigation-screen">
                  <div className="navigation-menu">
                    {menuItems.map((item, index) => (
                      <div
                        key={item}
                        className={`navigation-item ${
                          index === 0 ? "active" : ""
                        }`}
                      >
                        <IoMdHome/>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="navigation-overlay"></div>
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