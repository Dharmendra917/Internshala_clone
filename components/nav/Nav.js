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
        <Link className={styles.link} href="/">
          {" "}
          <li className={styles.li}>Home</li>
        </Link>
        <Link className={styles.link} href="#">
          <li className={styles.li}>Canditates</li>
        </Link>
        <Link className={styles.link} href="#">
          {" "}
          <li className={styles.li}>About</li>{" "}
        </Link>
        <Link className={styles.link} href="#">
          <li className={styles.li}>Contact</li>
        </Link>
        <button className={styles.button}>Post a Job</button>
        <Link href="/student">
          <button className={`${styles.w} ${styles.button} `}>
            Want a Job
          </button>
        </Link>
      </ul>
    </div>
  );
};

export default Nav;
