import React from "react";
import { Link } from "react-router-dom";

import logo from "../../../assets/logo.jpg";
import bagIcon from "../../../assets/bag-icon.svg";
import userIcon from "../../../assets/user-icon.svg";
import searchIcon from "../../../assets/search-icon.svg";
import hamburgerIcon from "../../../assets/hamburger-menu.svg";

import "./navmobile.scss";

const NavMobile = () => {
  return (
    <div className="navbar__mobile-container container">
      <div className="navbar__left">
        {/* hamburger menu */}
        <Link to="/" className="btn">
          <img src={hamburgerIcon} alt="menu" />
        </Link>

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
  );
};

export default NavMobile;
