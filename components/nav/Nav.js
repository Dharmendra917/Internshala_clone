import React from "react";
import styles from "./Nav.module.css";
import Link from "next/link";
const Nav = () => {
  return (
    <div className={styles.nav}>
      <Link className={styles.link} href="/">
        <div className={styles.icon}>
          <span className={styles.span1}>ind</span>
          <span className={styles.span}>f</span> Jobs
        </div>
      </Link>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>Canditates</li>
        <li>About</li>
        <li>Contact</li>
        <button className={styles.button}>Post a Job</button>
        <button className={`${styles.w} ${styles.button} `}>Want a Job</button>
      </ul>
    </div>
  );
};

export default Nav;
