import "./searchbar.scss";
import searchIcon from "../../../assets/search-icon.svg";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

type SearchbarProps = {
  iconPos: "left" | "right";
};

const Searchbar = ({ iconPos }: SearchbarProps) => {
  const navigate = useNavigate();
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search?name=${input}`, { replace: true });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className={`searchbar ${iconPos}`}>
        <input
          className="searchbar_input"
          type="text"
          placeholder="Search for restaurant cuisine, chef"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <img className="searchbar_icon" src={searchIcon} alt="searchIcon" />
      </div>
    </form>
  );
};

export default Searchbar;
