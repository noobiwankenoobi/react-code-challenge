import React from "react";
// CSS
import styles from "./Hero.module.css";
// Images
import multipass from "../../images/multipass.jpg";

const Hero = () => {
  // const mainImageUrl =
  //   "https://cdn.onebauer.media/one/empire-tmdb/films/18/images/15yszF6DeZD9zUzh89WtY5pnnRD.jpg?quality=50&width=1800&ratio=16-9&resizeStyle=aspectfill&format=jpg";
  /////////////////////////
  // Hero Main
  ///////////////////
  const heroMain = (
    <div className={styles.main}>
      <div className={styles.overlay} />
      <img src={multipass} className={styles.image} alt="fifth-element" />
      {/* <img src={mainImageUrl} className={styles.image} alt="fifth-element" /> */}
      <div className={styles.header_container}>
        <h1 className={styles.header}>We know you love movies. </h1>
        <h2 className={styles.sub_header}>We do too.</h2>
      </div>
      <div className={styles.lower}>
        <h2 className={styles.lower_text}>
          ask about our MoviePass at the counter!
        </h2>
      </div>
    </div>
  );

  return heroMain;
};

export default Hero;
