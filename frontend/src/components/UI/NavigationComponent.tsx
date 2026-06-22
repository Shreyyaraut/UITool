import { IoMdHome } from "react-icons/io";

export default function NavigationComponent() {
  const menuItems = [
    "Home",
    "Settings",
    "Profile",
    "Bottom Tabs",
    "Tab View",
  ];

  return (
    <div className="navigation-screen">
      <div className="navigation-menu">
        {menuItems.map((item, index) => (
          <div
            key={item}
            className={`navigation-item ${
              index === 0 ? "active" : ""
            }`}
          >
            <IoMdHome />
            <span>{item}</span>
          </div>
        ))}
      </div>

      <div className="navigation-overlay"></div>
    </div>
  );
}