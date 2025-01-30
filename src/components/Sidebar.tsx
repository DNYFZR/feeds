import "./Sidebar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import menuIcon from "/icons/menu-128.png";

interface SidebarProps {
  title: string;
  keys: string[];
}

const Sidebar: React.FC<SidebarProps> = ({ title, keys }) => {
  const [menuFilter, setMenuFilter] = useState<string>();
  const [filteredKeys, setFilteredKeys] = useState<string[]>(keys);
  
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [activeKey, setActiveKey] = useState<string>(keys[0]);
  const navigate = useNavigate();

  const handleKeyChange = (newActiveKey: string) => {
    const newKey = newActiveKey.replaceAll(" : ", "-").replaceAll(" ", "-");
    try {
      setActiveKey(newActiveKey);

      // console.log("Navigating to:", `/feeds/${newKey === "base" ? "" : newKey}`);
      navigate(`/feeds/${newKey === "home" ? "" : newKey}`, { replace: true });

    } catch (error) {
      console.error("Error navigating to new route:", error);
    }
  };

  const handleMenuIconClick = () => {
    try {
      setShowSidebar(!showSidebar);
    } catch (error) {
      console.error("Error toggling sidebar:", error);
    }
  };

  const handleKeyFilter = (searchTerm:string) => {
    setMenuFilter(searchTerm);
    setFilteredKeys(keys.filter((k) => k.includes(searchTerm)));
  };

  return (
    <div>
      {/* Menu Icon */}
      <button className="sidebar-icon" onClick={handleMenuIconClick}>
        <img src={menuIcon} className="sidebar-icon-img" />
      </button>

      {/* Sidebar */}
      {showSidebar && (
        <div className="sidebar">
          <h3 className="sidebar-title">{title}</h3>
          
          <div className="sidebar-search">
            <input
              placeholder="search..."
              type="text" 
              value={menuFilter}
              onChange={(e) => handleKeyFilter(e.target.value)} 
              />
          </div>
          
          {filteredKeys.map((v, idx) => (
            <button
              key={idx}
              className={activeKey === v ? "sidebar-button active" : "sidebar-button"}
              onClick={() => handleKeyChange(v)}
            >
              {v}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;