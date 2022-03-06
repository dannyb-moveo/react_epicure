import React from "react";
import "./sidebar.scss";
import { RiCloseLine } from "react-icons/ri";

const Sidebar = () => {
  const open = true;
  return (
    <aside className="sidebar sidebar-show">
      <div className="sidebar__header">
        <RiCloseLine className="sidebar_header-icon" />
      </div>

      <div className="sidebar__header-links">
        <ul>
          <li>Chefs</li>
          <li>Restaurants</li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
