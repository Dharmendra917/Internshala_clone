"use client";
import axios from "axios";
import React from "react";
import styles from "@/app/student/auth/profile/page.module.css";
import { useSelector } from "react-redux";
import { useState } from "react";

const profile = () => {
  const [profile, setProfile] = useState(true);
  const [editProfile, seteditProfile] = useState(false);
  const { student } = useSelector((state) => state.studentReducer);

  // Show profile div --------------
  const profileHandler = () => {
    setProfile(true);
    if (editProfile) {
      seteditProfile(false);
    }
  };

  // editProfileHandler -----------
  const editProfileHandler = () => {
    seteditProfile(true);
    if (profile) {
      setProfile(false);
    }
  };

  // Edit Resume Handler ---------- // InComplete
  const resumeHandler = () => {
    alert("sorry! , we are working on this functionality");
  };

  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.left}>
          <h4>Student Information</h4>
          <h5 onClick={profileHandler}>Profile</h5>
          <h5 onClick={editProfileHandler}>Edit Profile</h5>
          <h5 onClick={resumeHandler}>Edit Resume</h5>
        </div>
        <div className={styles.right}>
          <div
            className={styles.profileCard}
            style={{ display: profile ? "block" : "none" }}
          >
            <div className={styles.topBackground}></div>
            <div className={styles.bottom}>
              <div className={styles.profileAndName}>
                <div className={`${styles.image}`}>
                  <img src={student && student.avatar.url} alt="profileImage" />
                </div>
                <h2 className={styles.firstLastName}>
                  {` ${student && student.firstname} ${
                    student && student.lastname
                  }`}
                </h2>
              </div>
              <h6>Email : {student && student.email}</h6>
              <h5>City : {student && student.city} </h5>
              <h5>Gender : {student && student.gender} </h5>
              <button onClick={editProfileHandler}>Edit Profile</button>
              <button className={styles.delete}>Delete Account</button>
            </div>
          </div>

          <div
            className={styles.editProfile}
            style={{ display: editProfile ? "block" : "none" }}
          >
            <div className={styles.topBackground}></div>
            <div className={styles.bottom}>
              <div className={styles.profileAndName}>
                <div className={`${styles.image}`}>
                  <img src={student && student.avatar.url} alt="profileImage" />
                </div>
                <h2 className={styles.firstLastName}>
                  <input type="text" placeholder="firstname" />
                  {/* <input type="text" placeholder="lastname" /> */}
                </h2>
              </div>
              <h6>
                Email : <input type="text" placeholder="xyz@gmail.com" />
              </h6>
              <h5>
                City :
                <input type="text" placeholder="bhhopal" />
              </h5>
              <h5>
                Gender :
                <input type="text" placeholder="Male" />
              </h5>
              <button>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
