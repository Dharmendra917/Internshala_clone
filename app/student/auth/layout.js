"use client";
import { useRouter } from "next/navigation";
import { asyncsignoutstudent } from "@/store/Actions/studentActions";
import React, { use, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "@/app/student/auth/layout.module.css";
import Image from "next/image";
import Link from "next/link";

const Student = ({ children }) => {
  const [isDivVisible, setisDivVisible] = useState(false);
  const defref = useRef(null);

  // ----------- current student information
  const { student, isAuthenticated } = useSelector(
    (state) => state.studentReducer
  );
  const router = useRouter();
  // console.log(isAuthenticated);

  // ---------- dispaly block or none
  const menuHandler = () => {
    if (isDivVisible) {
      setisDivVisible(false);
      console.log(isDivVisible);
    }
    if (!isDivVisible) {
      setisDivVisible(true);
    }
  };

  // --------- click on nav bar it will dispaly none menu bar
  const remove = () => {
    if (isDivVisible) {
      setisDivVisible(false);
    }
  };

  // ------- signout handler
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(asyncsignoutstudent());
  };

  // -------- it will run statement after refreshing
  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/");
    }
  }, [!isAuthenticated]);

  return (
    <>
      <nav className={styles.nav} onClick={remove}>
        <img src="/logo.png" alt="logo" width="100px" />
        <div className={styles.center}>
          <Link className={styles.Link} href="">
            <h3>Jobs</h3>
          </Link>
          <Link className={styles.Link} href="">
            <h3>Companies</h3>
          </Link>
          <Link className={styles.Link} href="">
            {" "}
            <h3>Salary</h3>
          </Link>
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
          <div className={`${styles.inner_right}`} id={styles.notification}>
            <i class="ri-notification-fill"></i>
          </div>
          <div className={`${styles.inner_right} `}>
            <div onClick={menuHandler} className={styles.profile}>
              <img
                src={student && student.avatar.url}
                // src=""
                alt="profileImage"
                className={styles.image}
              />
            </div>
          </div>
        </div>

        <div
          ref={defref}
          className={isDivVisible ? styles.menu : ""}
          style={{ display: isDivVisible ? "block" : "none" }}
        >
          <h5>
            <Link className={styles.Link} href="/student/auth/profile">
              Profile
            </Link>
          </h5>
          <h5>
            <Link className={styles.Link} href="">
              Resume
            </Link>{" "}
          </h5>
          <h5 onClick={signoutHandler}>
            <Link className={styles.Link} href="">
              Signout
            </Link>{" "}
          </h5>
        </div>

        <div className={styles.notification_menu}>
          <div className={styles.inner_notification_menu}>
            <h4>Notifications</h4>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
            <p>
              <Link className={`${styles.Link}`} href="#">
                xyz compnay trying to connect you
              </Link>
            </p>
          </div>
        </div>
      </nav>

      {children}
    </>
  );
};

export default Student;
