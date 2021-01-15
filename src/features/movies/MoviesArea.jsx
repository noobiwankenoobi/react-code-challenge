import React, { useState, useEffect } from "react";
// CSS
import styles from "./MoviesArea.module.css";
// Components
import MoviesGrid from "./MoviesGrid";
// Redux Toolkit
import { useDispatch, useSelector } from "react-redux";
import {
  getDiscoverMovies,
  selectDiscovered,
} from "../movies/discoverMoviesSlice";
import { selectSearched } from "../movies/searchMoviesSlice";
import DetailViewModal from "../details/DetailViewModal";

const MoviesArea = ({ filterValue }) => {
  // Redux (Toolkit)
  const dispatch = useDispatch();
  const discoveredMovies = useSelector(selectDiscovered);
  const searchedMovies = useSelector(selectSearched);
  const view = useSelector((state) => state.view.view);
  // Visible Movies
  const [visibleMovies, setVisibleMovies] = useState([]);
  // Detail View
  const [isOpen, setOpen] = useState(false);
  const [currentMovie, setCurrentMovie] = useState(null);

  ////////////////////////////////////////////
  // Filter Movies
  //////////////////////////////////////////
  const filterMovies = (value, movies) => {
    switch (value) {
      case 1:
        console.log("case 0 is running");
        return movies.filter(
          (movie) => movie.vote_average > 0 && movie.vote_average <= 2
        );
      case 2:
        console.log("case 1 is running");
        return movies.filter(
          (movie) => movie.vote_average >= 2 && movie.vote_average <= 4
        );
      case 3:
        return movies.filter(
          (movie) => movie.vote_average >= 4 && movie.vote_average <= 6
        );
      case 4:
        return movies.filter(
          (movie) => movie.vote_average >= 6 && movie.vote_average <= 8
        );
      case 5:
        return movies.filter(
          (movie) => movie.vote_average >= 8 && movie.vote_average <= 10
        );
      default:
        return movies;
    }
  };

  ////////////////////////////////////////////
  // Set Visible Movies - Includes Filtering
  /////////////////////////////////////////////
  useEffect(() => {
    // Discover View
    if (view === "discover" && discoveredMovies) {
      if (filterValue) {
        let value = filterValue;
        console.log("value inside useEffect is ", value);
        let filtered = filterMovies(value, discoveredMovies);
        console.log("filtered in discover", filtered);
        setVisibleMovies(filtered);
      } else if (!filterValue) {
        setVisibleMovies(discoveredMovies);
      }
      // Search View
    } else if (view === "search" && searchedMovies) {
      if (filterValue) {
        let value = filterValue;
        let filtered = filterMovies(value, searchedMovies);
        console.log("filtered in search", filtered);
        setVisibleMovies(filtered);
      } else if (!filterValue) {
        setVisibleMovies(searchedMovies);
      }
    }
  }, [filterValue, discoveredMovies, searchedMovies, view]);

  ////////////////////////////
  // GET Discovery Movies
  //////////////////////////////
  const handleGetDiscover = () => {
    dispatch(getDiscoverMovies());
  };

  /////////////////////
  // On Page Load
  ///////////////////
  useEffect(() => {
    handleGetDiscover();
  }, []);

  /////////////////////
  // Debug
  //////////////////
  useEffect(() => {
    console.log("discoverMovies inside MoviesArea is", discoveredMovies);
  }, [discoveredMovies]);

  useEffect(() => {
    console.log("view is", view);
  }, [view]);

  /////////////////////////////////////
  // Handle Clicking on Movie
  ////////////////////////////////////
  const handleClickMovie = (selectedMovie) => {
    setCurrentMovie(selectedMovie);
    setOpen(true);
  };

  //////////////////////////////
  // Movies Main Area
  ////////////////////////////
  const moviesArea = (
    <div className={styles.main}>
      <DetailViewModal
        isOpen={isOpen}
        setOpen={setOpen}
        currentMovie={currentMovie}
      />
      {visibleMovies ? (
        <MoviesGrid
          movies={visibleMovies}
          view={view}
          handleClickMovie={handleClickMovie}
        />
      ) : null}
    </div>
  );
  return moviesArea;
};

export default MoviesArea;
