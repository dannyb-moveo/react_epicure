import "./searchbar.scss";
import searchIcon from "../../assets/search-icon.svg";

type SearchbarProps = {
    iconPos: "left" | "right";
};

const Searchbar = ({ iconPos }: SearchbarProps) => {
    return (
        <form>
            <div className={`searchbar ${iconPos}`}>
                <input
                    className="searchbar_input"
                    type="text"
                    placeholder="Search for restaurant cuisine, chef"
                />
                <img
                    className="searchbar_icon"
                    src={searchIcon}
                    alt="searchIcon"
                />
            </div>
        </form>
    );
};

export default Searchbar;
