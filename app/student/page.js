import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
export const metadata = {
  title: "Student | Homepage",
};

const page = () => {
  return (
    <div className="container mt-4">
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            src="/signIn.png"
            // layout="responsive"
            width={1920}
            height={1080}
            alt="HomeImage"
            className={styles.image}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h2 className={styles.h2}>Hello Again!</h2>

            <form className={styles.formcontrol} action="">
              <input
                className={styles.input}
                type="email"
                placeholder="Enter Email"
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Your Password"
              />
              <Link className="link forget" href="#">
                {" "}
                {/* use global css */}
                Forgot your password?
              </Link>
              <button className={styles.button}>SIGN IN</button>
            </form>
            <button className={styles.button}>
              <i class="ri-google-fill"></i> SIGN IN WITH GOOGLE
            </button>
            <h6 className={styles.registered}>
              Not account yet?{" "}
              <Link className="link" href="./student/signup">
                Registered
              </Link>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
