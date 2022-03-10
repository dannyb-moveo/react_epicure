import { links } from "../../utils/constants";
import { Searchbar } from "../UI";
import { Link } from "react-router-dom";
import NavMobile from "./mobile/NavMobile";

import "./navbar.scss";
import logo from "../../assets/logo.jpg";
import bagIcon from "../../assets/bag-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import hamburgerIcon from "../../assets/hamburger-menu.svg";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isActive, setIsActive] = useState("");
  const handleSidebar = (action: boolean) => {
    console.log(action);
    setIsSidebarOpen(action);
  };

  return (
    <nav className="navbar">
      {/* Mobile navbar */}
      <NavMobile />

      {/* Desktop navbar */}
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
            <Link
              to="/"
              onClick={() => {
                setIsActive("");
              }}
            >
              <img src={logo} alt="epicure" />
            </Link>
            <Link
              to="/"
              onClick={() => {
                setIsActive("");
              }}
            >
              <h1>EPICURE</h1>
            </Link>
            <ul>
              {links.map((link) => {
                const { id, text, url } = link;
                return (
                  <li
                    key={id}
                    onClick={() => {
                      setIsActive(text);
                    }}
                    className={`${isActive === text ? "active" : ""}`}
                  >
                    <Link to={url} className="btn">
                      {text}
                    </Link>
                  </li>
                );
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
    </nav>
  );
};

export default Header;
