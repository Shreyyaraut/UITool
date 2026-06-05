import { useState } from "react";
import {
  FiGrid,
  FiHome,
  FiSettings,
  FiUser,
  FiMenu,
  FiX,
} from "react-icons/fi";
import { MdTab, MdViewDay } from "react-icons/md";

export default function SideMenuComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div className="side-menu-root">
      <button
        className="hamburger-btn"
        onClick={(e) => {
          e.stopPropagation();
          setOpen(true);
        }}
      >
        <FiMenu />
      </button>

      {open && (
        <div className="side-menu-wrapper">
          <div
            className="side-menu-overlay"
            onClick={(e) => {
              e.stopPropagation();
              setOpen(false);
            }}
          ></div>

          <div className="side-menu">
            <button
              className="side-menu-close"
              onClick={(e) => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              <FiX />
            </button>

            <div className="side-menu-brand">
              <FiGrid />
              <span>Side Menu</span>
            </div>

            <div className="side-menu-item">
              <FiHome />
              <span>Home</span>
            </div>

            <div className="side-menu-item">
              <FiSettings />
              <span>Settings</span>
            </div>

            <div className="side-menu-item">
              <FiUser />
              <span>Profile</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}