"use client";
import axios from "axios";
import React from "react";
import styles from "@/app/student/auth/profile/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  asyncavatarstudent,
  asynccurrentstudent,
  asyncupdatestudent,
} from "@/store/Actions/studentActions";

const profile = () => {
  const [profile, setProfile] = useState(true);
  const [editProfile, seteditProfile] = useState(false);
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    city: "",
    gender: "",
    email: "",
  });
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

  // updateHandler ------------------
  const changeHandler = (e) => {
    // console.log(e.target.value);
    const { name, value } = e.target;
    // console.log(name, value);
    setFormData({ ...formdata, [name]: value });
  };
  const dispatch = useDispatch();
  const studentUpdateHandler = () => {
    const newstudent = formdata;
    console.log(newstudent);
    dispatch(asyncupdatestudent(newstudent));
    if (editProfile && !profile) {
      setProfile(true);
    }
    setFormData({
      firstname: "",
      lastname: "",
      contact: "",
      city: "",
      gender: "Male",
      email: "",
    });
  };
  //  avatarHandler ------------------
  const avatarHandler = (e) => {
    e.preventDefault();
    const formdata = new FormData(e.target);
    formdata.set("avatar", e.target.avatar.files[0]);
    console.log(formdata);
    dispatch(asyncavatarstudent(formdata));
  };
  // to click profileImage imageInput field automically click
  const profileClickHandler = () => {
    document.querySelector("#chooseFile").click();
  };

  const onChangeHandler = () => {
    document.querySelector("#hidden button").click();
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
                {/* upload profileImage with the help of form tag */}
                <form
                  id="hidden"
                  className={styles.hidden}
                  onSubmit={avatarHandler}
                  encType="multipart/form-data"
                >
                  <input
                    id="chooseFile"
                    type="file"
                    name="avatar"
                    onChange={onChangeHandler}
                  />
                  <button type="submit">submit</button>
                </form>
                <h2 className={styles.firstLastName}>
                  {` ${student && student.firstname} `}
                </h2>
                <h2 className={styles.firstLastName}>{`${
                  student && student.lastname
                }`}</h2>
              </div>
              <h6>contact : {student && student.contact}</h6>
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
                <div
                  onClick={profileClickHandler}
                  className={`${styles.image}`}
                >
                  <img src={student && student.avatar.url} alt="profileImage" />
                </div>
                <h2 className={styles.firstLastName}>
                  <input
                    type="text"
                    name="firstname"
                    value={formdata.firstname}
                    placeholder="firstname"
                    onChange={changeHandler}
                  />
                </h2>
                <h2 className={styles.firstLastName}>
                  <input
                    type="text"
                    placeholder="lastname"
                    name="lastname"
                    value={formdata.lastname}
                    onChange={changeHandler}
                  />
                </h2>
              </div>
              <h6>
                contact :{" "}
                <input
                  type="text"
                  placeholder="contact"
                  name="contact"
                  value={formdata.contact}
                  onChange={changeHandler}
                />
              </h6>
              <h6>
                Email :{" "}
                <input
                  type="text"
                  placeholder="xyz@gmail.com"
                  name="email"
                  value={formdata.email}
                  onChange={changeHandler}
                />
              </h6>
              <h5>
                City :
                <input
                  type="text"
                  placeholder="bhhopal"
                  name="city"
                  value={formdata.city}
                  onChange={changeHandler}
                />
              </h5>

              <h5>
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
              </h5>

              <button onClick={studentUpdateHandler}>Update</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
