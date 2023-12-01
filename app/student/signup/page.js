"use client";
import React, { useEffect, useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";
import { asyncsignupstudent } from "@/store/Actions/studentActions";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

// export const metadata = {
//   title: "Student | Signup-Page",
// };

const page = () => {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    contact: "",
    city: "",
    gender: "Male",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setformdata({ ...formdata, [name]: value });
  };

  const dispatch = useDispatch();
  const signupHandler = (event) => {
    event.preventDefault();
    const newstudent = formdata;
    console.log(newstudent);
    dispatch(asyncsignupstudent(newstudent));
    setformdata({
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      number: "",
      city: "",
      gender: "Male",
    });
  };

  const { isAuthenticated } = useSelector((state) => state.studentReducer);
  const router = useRouter();
  useEffect(() => {
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);

  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <div className={styles.form}>
          <form className={styles.innerform} onSubmit={signupHandler}>
            <input
              className={styles.input}
              type="text"
              placeholder="Enter First Name"
              name="firstname"
              value={formdata.firstname}
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Last Name"
              name="lastname"
              value={formdata.lastname}
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              type="email"
              placeholder="Enter Email"
              name="email"
              value={formdata.email}
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              type="password"
              placeholder="Enter Password"
              name="password"
              value={formdata.password}
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Enter Number"
              name="contact"
              value={formdata.contact}
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              type="text"
              placeholder="Enter City"
              name="city"
              value={formdata.city}
              onChange={changeHandler}
            />
            <div className={styles.gender}>
              <input
                type="radio"
                id="male"
                name="gender"
                value="Male"
                onChange={changeHandler}
                checked={formdata.gender === "Male"}
              />
              <label for="male">Male</label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="Female"
                onChange={changeHandler}
                checked={formdata.gender === "Female"}
              />
              <label for="female">Female</label>
              <input
                type="radio"
                id="other"
                name="gender"
                value="Other"
                onChange={changeHandler}
                checked={formdata.gender === "Other"}
              />
              <label for="other">Other</label>
            </div>

            <button className={styles.button}>SIGN UP</button>
          </form>
        </div>
      </div>
      <div className={styles.right}>
        <Image
          src="/signup.png"
          width={1920}
          height={1080}
          alt="signupImage"
          priority={true} // {false} | {true}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default page;
