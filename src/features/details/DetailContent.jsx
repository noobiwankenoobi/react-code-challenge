import React from "react";
// CSS
import styles from "./DetailContent.module.css";
// Feather
import { X } from "react-feather";

const DetailContent = ({ currentMovie, setOpen }) => {
  return (
    <div className={styles.detail_main} onClick={() => setOpen(false)}>
      <div className={styles.detail_area}>
        <button className={styles.close_btn} onClick={() => setOpen(false)}>
          <X size={32} />
        </button>
        <div className={styles.detail_content}>
          <img
            src={`http://image.tmdb.org/t/p/w342/${currentMovie.poster_path}`}
            className={styles.poster}
            alt="poster-large"
          />
          <div className={styles.info}>
            <h1 className={styles.movie_title}>
              {currentMovie.original_title}
            </h1>
            <p className={styles.overview}>{currentMovie.overview}</p>
            <h5 className={styles.info_title}>RELEASE DATE</h5>
            <span className={styles.info_value}>
              {currentMovie.release_date}
            </span>
            <h5 className={styles.info_title}>AVG RATING</h5>
            <span
              className={styles.info_value}
            >{`${currentMovie.vote_average} /10`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailContent;
