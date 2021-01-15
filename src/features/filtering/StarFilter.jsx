import React, { useState, useEffect } from "react";
import StarIcon from "./StarIcon";
// CSS
import styles from "./StarFilter.module.css";

const StarFilter = ({ setFilterValue }) => {
  // Star Array
  const initial = [false, false, false, false, false];
  const [starArray, setStarArray] = useState(initial);
  // The index # of the currently selected star, Number
  const [currentSelected, setCurrentSelected] = useState(null);

  //////////////////////////////////////////
  // Star Selection/Rendering Logic
  /////////////////////////////////////
  // Handling Selection of All Stars to the Left of Current Selected
  useEffect(() => {
    console.log("currentSelected index is ", currentSelected);
    const newArray = [];
    if (currentSelected !== null) {
      for (let index = 0; index < 5; index++) {
        if (index < currentSelected) {
          newArray.push(true);
        } else {
          newArray.push(false);
        }
      }
      setStarArray(newArray);
    } else if (currentSelected === null) {
      setStarArray(initial);
    }
  }, [currentSelected]);

  ////////////////////////////////////////
  // Send Filter Parameter to Top Lvl
  ///////////////////////////////////
  // The +1 is just to avoid the truthy/falsyness of zero
  useEffect(() => {
    setFilterValue(currentSelected);
  }, [currentSelected]);

  /////////////////////////////////////
  // Render Stars
  //////////////////////////////////
  const starRender = starArray.map((value, index) => (
    <StarIcon
      selected={value}
      index={index}
      currentSelected={currentSelected}
      setCurrentSelected={setCurrentSelected}
    />
  ));

  const starFilterMain = <div className={styles.container}>{starRender}</div>;

  return starFilterMain;
};

export default StarFilter;
