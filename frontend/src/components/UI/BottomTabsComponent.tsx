import { useState } from "react";
import { FiHome, FiUser } from "react-icons/fi";

export default function BottomTabsComponent() {
  const [activeTab, setActiveTab] =
    useState("Home");

  return (
    <div className="bottom-tabs-ui">
      <div className="bottom-tabs-screen">
        <span>{activeTab} Screen</span>
      </div>

      <div className="bottom-tabs-bar">
        <button
          type="button"
          className={`bottom-tabs-btn ${
            activeTab === "Home" ? "active" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("Home");
          }}
        >
          <FiHome />
          <span>Home</span>
        </button>

        <button
          type="button"
          className={`bottom-tabs-btn ${
            activeTab === "Profile" ? "active" : ""
          }`}
          onClick={(e) => {
            e.stopPropagation();
            setActiveTab("Profile");
          }}
        >
          <FiUser />
          <span>Profile</span>
        </button>
      </div>
    </div>
  );
}