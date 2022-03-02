import "./searchbar.scss";
import searchIcon from "../assets/search-icon.svg";

const Searchbar = () => {
  return (
    <form>
      <div className="searchbar-wrap">
        <input
          className="searchbar"
          type="text"
          placeholder="Search for restaurant cuisine, chef"
        />
        <img className="searchbar-icon" src={searchIcon} alt="searchIcon" />
      </div>
    </form>
  );
};

export default Searchbar;
