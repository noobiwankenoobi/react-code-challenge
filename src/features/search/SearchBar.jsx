import React, { useState, useEffect, useRef } from "react";
// Feather
import { Search } from "react-feather";
// CSS
import styles from "./SearchBar.module.css";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import { getSearchMovies, clearSearch } from "../movies/searchMoviesSlice";
import { setView } from "../views/viewSlice";

const SearchBar = () => {
  // Focus
  const [isFocused, setFocused] = useState(false);
  // Search value
  const [searchValue, setSearchValue] = useState("");
  // Redux
  const dispatch = useDispatch();
  const searchMovies = useSelector((state) => state.search.searchedMovies);
  // Ref
  const searchContainerRef = useRef(null);

  // Debug
  useEffect(() => {
    console.log("searchValue is", searchValue);
  }, [searchValue]);

  //////////////////////////////////////////////////////
  // Clear Search Results if searchValue is empty
  ////////////////////////////////////////////////////
  useEffect(() => {
    if (!searchValue && searchMovies) {
      console.log("SET RESULTS TO EMPTY");
      // Set results to empty with reducer action
      dispatch(clearSearch());
      dispatch(setView("discover"));
    }
  }, [searchValue]);

  ////////////////////////////////
  // Handle Change
  ///////////////////////////////// onChange
  const handleChange = (value) => {
    setSearchValue(value);
  };

  /////////////////////////////////
  // Handle Submit
  ////////////////////////////// onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = searchValue;
    const obj = { searchValue: value };
    dispatch(setView("search"));
    dispatch(getSearchMovies(obj));
    searchContainerRef.current.scrollIntoView({ behavior: "smooth" });
  };

  //////////////////////////////////
  // Search Bar Component
  //////////////////////////////
  const searchBar = (
    <div className={styles.outer_container} ref={searchContainerRef}>
      {/* <span className="recipe-search__context-message" style={messageStyle}>
        Search within collection
      </span> */}
      <div className={styles.search_container}>
        <div className={styles.icon_container}>
          <Search size={20} />
        </div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            name="searchValue"
            // onFocus={() => setFocused(true)}
            // onBlur={() => setFocused(false)}
            placeholder={"Search for Movies"}
            value={searchValue}
            className={styles.input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <button type="submit" className={styles.submit_btn}>
            Search
          </button>
        </form>
      </div>
    </div>
  );

  return searchBar;
};

export default SearchBar;
