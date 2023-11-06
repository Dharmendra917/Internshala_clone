"use client";
import { useRouter } from "next/navigation";
import React, { use, useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "@/app/student/auth/layout.module.css";
import Image from "next/image";

const Student = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const router = useRouter();
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [!isAuthenticated]);

  return (
    <>
      <nav className={styles.nav}>
        <img src="/logo.png" alt="logo" width="100px" />
        <div className={styles.center}>
          <h3>Jobs</h3>
          <h3>Companies</h3>
          <h3>Salary</h3>
        </div>
        <div className={styles.right}>
          <div className={styles.inner_right}>
            <div className={styles.search}>
              <input type="text" placeholder="Find Your Best Jobs." />
              <div id={styles.search}>
                <i class="ri-search-line"></i>
              </div>
            </div>
          </div>
          <div className={styles.inner_right} id={styles.notification}>
            <i class="ri-notification-fill"></i>
          </div>
          <div className={styles.inner_right}>
            <div className={styles.profile}>
              <Image
                src="/profilee.jpg"
                width={1920}
                height={1080}
                alt="HomeImage"
                priority={true} // {false} | {true}
                className={styles.image}
              />
            </div>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Student;
