import React, { useState } from "react";
import { Star } from "react-feather";
// CSS
import styles from "./StarIcon.module.css";

const StarIcon = ({ selected, index, currentSelected, setCurrentSelected }) => {
  // Fill Style
  const fillToggle = selected ? "orange" : "none";

  //////////////////////////////////////
  // Handle Star Click
  ///////////////////////////// Handle Click
  // If current selected star is clicked, set it to null
  // The +1 is just to avoid potential truthy/falsy nonsense of zero
  const handleClick = (i) => {
    if (i === currentSelected - 1) {
      setCurrentSelected(null);
    } else {
      setCurrentSelected(i + 1);
    }
  };

  ////////////////////////////
  // Star Main
  /////////////////////
  const starMain = (
    <div className={styles.star_unselected} onClick={() => handleClick(index)}>
      <Star color="#8B482E" fill={fillToggle} />
    </div>
  );

  return starMain;
};

export default StarIcon;
