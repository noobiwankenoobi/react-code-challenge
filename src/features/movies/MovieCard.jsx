import React from "react";
// CSS
import styles from "./MovieCard.module.css";

const MovieCard = ({ movie, handleClickMovie }) => {
  // Image Url
  const posterPath = movie.poster_path;

  //////////////////////////////////
  // Handle Movie Card Click
  ///////////////////////////////
  const handleMovieCardClick = () => {
    console.log("movie clicked is", movie);
    handleClickMovie(movie);
    // Open up details view
  };

  ////////////////////////////
  // Movie Card Main
  /////////////////////////
  const movieCardMain = (
    <div className={styles.main} onClick={() => handleMovieCardClick()}>
      <img
        src={`http://image.tmdb.org/t/p/w342/${posterPath}`}
        className={styles.poster}
        alt="movie-card"
      />
    </div>
  );

  return movieCardMain;
};

export default MovieCard;
