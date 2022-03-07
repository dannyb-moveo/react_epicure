import { links } from "../../utils/constants";
import { Searchbar } from "..";

import "./navbar.scss";
import logo from "../../assets/logo.jpg";
import bagIcon from "../../assets/bag-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import hamburgerIcon from "../../assets/hamburger-menu.svg";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const handleSidebar = (action: boolean) => {
    console.log(action);
    setIsSidebarOpen(action);
  };
  return (
    <nav className="navbar">
      <div className="navbar_container">
        <div className="navbar-sidemenu">
          <button
            type="button"
            className="btn"
            onClick={() => handleSidebar(true)}
          >
            <img src={hamburgerIcon} alt="menu" />
          </button>
        </div>

        <div className="navbar_left">
          <div className="navbar_links">
            <img src={logo} alt="epicure" />
            <h1>EPICURE</h1>
            <ul>
              {links.map((link) => {
                const { id, text, url } = link;
                return <li key={id}>{text}</li>;
              })}
            </ul>
          </div>
        </div>

        <div className="navbar_right">
          <Searchbar iconPos="right" />

          <div className="navbar_btn-container">
            <button type="button">
              <img src={searchIcon} alt="userIcon" />
            </button>
            <button type="button">
              <img src={userIcon} alt="userIcon" />
            </button>
            <button type="button">
              <img src={bagIcon} alt="bagIcon" />
            </button>
          </div>
        </div>
      </div>

      <div className="navbar__container2 container">
        <div className="navbar__left">
          <button
            type="button"
            className="btn"
            onClick={() => handleSidebar(true)}
          >
            <img src={hamburgerIcon} alt="menu" />
          </button>

          <div className="navbar__logo">
            <img src={logo} alt="epicure" />
          </div>
        </div>

        <div className="navbar__right">
          <div className="navbar__btn-container">
            <button type="button" className="btn">
              <img src={searchIcon} alt="userIcon" />
            </button>
            <button type="button" className="btn">
              <img src={userIcon} alt="userIcon" />
            </button>
            <button type="button" className="btn">
              <img src={bagIcon} alt="bagIcon" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
