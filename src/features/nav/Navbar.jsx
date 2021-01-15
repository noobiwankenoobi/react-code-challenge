import React from "react";
import { Film } from "react-feather";
// CSS
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.logo_container}>
        <Film />
        <h1 className={styles.logo}>Local Movie Theater</h1>
      </div>
      <div className={styles.nav_links_container}>
        <li className={styles.nav_item}>Movie Pass</li>
        <li className={styles.nav_item}>Showtimes</li>
        <li className={styles.nav_item}>Buy Tickets</li>
        <li className={styles.nav_item}>Info</li>
      </div>
    </div>
  );
};

export default Navbar;
