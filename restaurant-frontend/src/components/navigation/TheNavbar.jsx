import { useState, useEffect } from "react";
import { navbarList } from "./TheNavbarConfig";
import { useNavigate, useLocation } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function TheSidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const routes = {
    Home: "/",
    Menu: "/menu",
    Profile: "/username",
    Order: "/your-order",
  };

  const initialActiveTab = localStorage.getItem("activeTab") || "Menu";
  const [activeTab, setActiveTab] = useState(initialActiveTab);

  const handleTabClick = (title) => {
    setActiveTab(title);
    localStorage.setItem("activeTab", title);

    if (routes[title]) {
      navigate(routes[title]);
    } else if (title === "Logo") {
      navigate(routes["Home"]);
      setActiveTab("Home");
    }
  };

  useEffect(() => {
    const pathname = location.pathname;
    const tabFromURL = Object.keys(routes).find(
      (key) => routes[key] === pathname
    );
    if (tabFromURL) {
      setActiveTab(tabFromURL);
      localStorage.setItem("activeTab", tabFromURL);
    }
  }, [location.pathname]);

  const handleKeyPress = (event, title) => {
    if (event.key === "Enter") {
      handleTabClick(title);
    }
  };

  const renderNavbarItem = (item) => {
    const isProfile = item.title === "Profile";
    return (
      <div
        onClick={() => handleTabClick(item.title)}
        onKeyDown={(e) => handleKeyPress(e, item.title)}
        key={item.title}
        className={`flex items-center cursor-pointer focus:outline-none ${
          activeTab === item.title ? "primary-color" : "stylish-border"
        }`}
        tabIndex={0}
      >
        {item.icon}
        {!isProfile && (
          <p className={`${activeTab === item.title ? "font-semibold" : ""}`}>
            {item.title}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="flex justify-between p-6 mx-[5%] pl-[5%] h-[10vh]">
      <div className="flex items-center w-[30%]">
        <div
          onClick={() => handleTabClick("Logo")}
          onKeyDown={(e) => handleKeyPress(e, "Logo")}
          className="flex items-center cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          <p className="font-bold text-xl">Hot and spicy</p>
        </div>
      </div>
      <div className="flex justify-between w-[70%] mr-[5%]">
        {navbarList.map((item) => renderNavbarItem(item))}
        <div
          onClick={() => handleTabClick("Profile")}
          onKeyDown={(e) => handleKeyPress(e, "Profile")}
          className="flex items-center cursor-pointer focus:outline-none"
          tabIndex={0}
        >
          <CgProfile />
        </div>
      </div>
    </div>
  );
}
