import React from "react";
import styles from "@/components/home/Home.module.css";
import Nav from "@/components/nav/Nav";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <div className={styles.parent}>
      <Nav />
      <div className={styles.page1}>
        <div className={styles.left}>
          <div className={styles.content}>
            <h5 className={styles.content_h5}>
              Easiest way to find a perfect job
            </h5>
            <h1 className={styles.content_h1}>
              Find Your Next <br /> Dream Job
            </h1>
            <Link href="/student">
              <button className={styles.button}>Looking For a Job?</button>
            </Link>
          </div>
        </div>
        <div className={styles.right}>
          <Image
            src="/homebackground.jpg"
            width={1920}
            height={1080}
            alt="HomeImage"
            priority={true} // {false} | {true}
            className={styles.Image}
          />
        </div>
      </div>
      {/* <div className={styles.page2}></div> */}
    </div>
  );
};

export default Home;
