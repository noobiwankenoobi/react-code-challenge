import React, { useState, useEffect } from "react";
// CSS
import "./App.css";
// Components
import Hero from "./features/hero/Hero";
import MoviesArea from "./features/movies/MoviesArea";
import Navbar from "./features/nav/Navbar";
import SearchArea from "./features/search/SearchArea";

function App() {
  const [filterValue, setFilterValue] = useState(null);

  return (
    <div className="App">
      <Navbar />
      <div className="vertical-wrapper">
        <div className="horizontal-wrapper">
          <Hero />
          <SearchArea setFilterValue={setFilterValue} />
          <MoviesArea filterValue={filterValue} />
        </div>
      </div>
    </div>
  );
}

export default App;
