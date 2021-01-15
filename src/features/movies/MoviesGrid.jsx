import React, { useEffect } from "react";
//CSS
import styles from "./MoviesGrid.module.css";
// Components
import MovieCard from "./MovieCard";
// Redux
import { useDispatch, useSelector } from "react-redux";

const MoviesGrid = ({ movies, view, handleClickMovie }) => {
  // Use Later
  const uiState = useSelector((state) => state.discover.status);

  //////////////////////////////////
  // Rendering Conditionals
  ////////////////////////////////

  //////////////////////////
  // Toggle Header Text
  /////////////////////////
  const headerText =
    view === "discover"
      ? "Discover Popular Movies"
      : view === "search"
      ? "Search Results"
      : null;

  //////////////////////////////
  // Movies Grid Main
  ///////////////////////////
  const moviesGridMain = movies ? (
    <div className={styles.main}>
      <div className={styles.header_container}>
        <h1>{headerText}</h1>
      </div>
      <div className={styles.grid}>
        {movies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            handleClickMovie={handleClickMovie}
          />
        ))}
      </div>
    </div>
  ) : null;

  return movies ? moviesGridMain : null;
};

export default MoviesGrid;
