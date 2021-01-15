import React from "react";
import StarFilter from "../filtering/StarFilter";
// CSS
import styles from "./SearchArea.module.css";
// Components
import SearchBar from "./SearchBar";

const SearchArea = ({ setFilterValue }) => {
  const searchAreaMain = (
    <div className={styles.main}>
      <StarFilter setFilterValue={setFilterValue} />
      <SearchBar />
    </div>
  );
  return searchAreaMain;
};

export default SearchArea;
