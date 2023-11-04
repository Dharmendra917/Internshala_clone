"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { asyncsiginstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";

//  export const metadata = {
//   title: "Student | Homepage",
// };

const page = () => {
  const [student, setstudent] = useState({
    email: "",
    password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setstudent({
      ...student,
      [name]: value,
    });
  };

  const dispatch = useDispatch();
  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(asyncsiginstudent(student));
    setstudent({
      email: "",
      password: "",
    });
  };

  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/auth/");
    }
  }, [isAuthenticated]);

  return (
    <div className="container mt-4">
      <div className={styles.main}>
        <div className={styles.left}>
          <Image
            src="/signIn.png"
            // layout="responsive"
            width={1920}
            height={1080}
            alt="signImage"
            priority={true} // {false} | {true}
            className={styles.image}
          />
        </div>
        <div className={styles.right}>
          <div className={styles.form}>
            <h2 className={styles.h2}>Hello Again!</h2>

            <form className={styles.formcontrol} onSubmit={submitHandler}>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter Email"
                name="email"
                value={student.email}
                onChange={changeHandler}
              />
              <input
                className={styles.input}
                type="password"
                placeholder="Your Password"
                name="password"
                value={student.password}
                onChange={changeHandler}
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
