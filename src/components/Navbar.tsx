import "./navbar.scss";
import logo from "../assets/logo.jpg";
import { links } from "../utils/constants";
import Searchbar from "./Searchbar";
import bagIcon from "../assets/bag-icon.svg";
import userIcon from "../assets/user-icon.svg";

const Header = () => {
  return (
    <nav className="container">
      <div className="left">
        <div className="nav-header">
          <img src={logo} alt="epicure" />
          <h1>EPICURE</h1>
        </div>

        <ul className="nav-links">
          {links.map((link) => {
            const { id, text, url } = link;
            return <li key={id}>{text}</li>;
          })}
        </ul>
      </div>

      <div className="right">
        <Searchbar />

        <div className="nav-btn-container">
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
