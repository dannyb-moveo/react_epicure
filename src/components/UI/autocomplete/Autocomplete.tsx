import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { fetchSearchQuery } from "../../../store/search-slice";
import AsyncSelect from "react-select/async";
import "./autocomplete.scss";

const Autocomplete = () => {
  const [input, setInput] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const { searchResults, isLoading } = useAppSelector((state) => state.search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const delay = setTimeout(() => {
      dispatch(fetchSearchQuery(input));
    }, 3000);

    return () => clearTimeout(delay);
  }, [input]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  if (isLoading) {
    return <div>loading</div>;
  }

  if (searchResults.length > 0) {
    const [results] = searchResults;
    // const { chefs, dishes, restaurants } = results;

    const keys = Object.keys(results);
    keys.map((key) => {
      console.log(results[key]);
      (results[key] as []).map((item: { name: string }) => {
        console.log(item.name);
      });
    });
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          onChange={changeHandler}
          value={input}
        />
        <AsyncSelect defaultOptions loadOptions={fetchSearchQuery} />
      </form>
    </div>
  );
};

export default Autocomplete;
