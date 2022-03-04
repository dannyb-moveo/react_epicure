import { links } from "../../utils/constants";
import { Searchbar } from "..";

import "./navbar.scss";
import logo from "../../assets/logo.jpg";
import bagIcon from "../../assets/bag-icon.svg";
import userIcon from "../../assets/user-icon.svg";
import searchIcon from "../../assets/search-icon.svg";
import hamburgerIcon from "../../assets/hamburger-menu.svg";

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container navbar_container">
                <div className="navbar-sidemenu">
                    <button type="button" className="btn">
                        <img src={hamburgerIcon} alt="menu" />
                    </button>
                </div>

                <div className="navbar_header">
                    <img src={logo} alt="epicure" />
                    <h1>EPICURE</h1>
                </div>

                <ul className="navbar_links">
                    {links.map(link => {
                        const { id, text, url } = link;
                        return <li key={id}>{text}</li>;
                    })}
                </ul>

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
        </nav>
    );
};

export default Header;
