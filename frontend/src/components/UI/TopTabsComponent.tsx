import { useState } from "react";

export default function TopTabsComponent() {
  const [activeTab, setActiveTab] =
    useState("Home");

  return (
    <div className="top-tabs-ui">
      <div className="top-tabs-bar">
        {["Home", "Profile"].map((tab) => (
          <button
            key={tab}
            type="button"
            className={`top-tabs-btn ${
              activeTab === tab ? "active" : ""
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setActiveTab(tab);
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="top-tabs-screen">
        <span>{activeTab} Screen</span>
      </div>
    </div>
  );
}