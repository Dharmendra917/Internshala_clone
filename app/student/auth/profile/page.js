"use client";
import axios from "axios";
import React from "react";
import styles from "@/app/student/auth/profile/page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import {
  asyncavatarstudent,
  asyncupdatestudent,
  asyncresetpassword,
} from "@/store/Actions/studentActions";

const profile = () => {
  const [profile, setProfile] = useState(true);
  const [editProfile, seteditProfile] = useState(false);
  const [resetPassword, setresetPassword] = useState(false);
  const { student } = useSelector((state) => state.studentReducer);
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    contact: "",
    city: "",
    gender: "",
    email: "",
  });

  // Show profile div --------------
  const profileHandler = () => {
    setProfile(true);
    if (editProfile) {
      seteditProfile(false);
    }
    if (resetPassword) {
      setresetPassword(false);
    }
  };

  // editProfileHandler -----------
  const editProfileHandler = () => {
    setFormData({
      firstname: student.firstname,
      lastname: student.lastname,
      contact: student.contact,
      city: student.city,
      gender: student.gender,
      email: student.email,
    });
    seteditProfile(true);
    if (profile || resetPassword) {
      setProfile(false);
      setresetPassword(false);
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
      seteditProfile(false);
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
  // Password Reset -------------
  const resetHandler = () => {
    setresetPassword(true);
    if (profile || editProfile) {
      setProfile(false);
      seteditProfile(false);
      // console.log("correct");
    }
  };
  const [misMatch, setmisMatch] = useState("");

  const changePasswordHandler = (e) => {
    e.preventDefault();
    const pass = e.target[0].value;
    const renewpassword = e.target[1].value;
    if (pass === renewpassword) {
      const password = {
        password: pass,
      };
      dispatch(asyncresetpassword(password));
    } else {
      document.querySelector(".misMatch").style.color = "red";
      setmisMatch("Password mismatch");
      setTimeout(() => {
        // this line credit by pranshu gupta ji from satna
        document.querySelector(".misMatch").style.display = "none";
      }, 5000);
      document.querySelector(".misMatch").style.display = "block";
    }
  };

  const off = () => {
    document.querySelector(".off").style.display = "none";
    document.querySelector(".on").style.display = "initial";
    document.querySelector(".inp1").type = "text";
  };

  const on = () => {
    document.querySelector(".off").style.display = "initial";
    document.querySelector(".on").style.display = "none";
    document.querySelector(".inp1").type = "password";
  };
  const offf = () => {
    document.querySelector(".offf").style.display = "none";
    document.querySelector(".onn").style.display = "initial";
    document.querySelector(".inp2").type = "text";
  };

  const onn = () => {
    document.querySelector(".offf").style.display = "initial";
    document.querySelector(".onn").style.display = "none";
    document.querySelector(".inp2").type = "password";
  };
  return (
    <>
      <div className={`${styles.main}`}>
        <div className={styles.left}>
          <h4>Student Information</h4>
          <h5 onClick={profileHandler}>Profile</h5>
          <h5 onClick={editProfileHandler}>Edit Profile</h5>
          <h5 onClick={resumeHandler}>Edit Resume</h5>
          <h5 onClick={resetHandler}>Reset Password</h5>
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
                  className={`${styles.image} ${styles.hover}`}
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

          <div
            className={`  ${styles.resetPasswordPage}     `}
            style={{ display: resetPassword ? "block" : "none" }}
          >
            <form onSubmit={changePasswordHandler}>
              <h3>Reset Your Password</h3>
              <p>
                Password must atleast more than 6 letter,include capital letter,{" "}
                <br /> number and special character.{" "}
              </p>
              <p className="misMatch">{misMatch}</p>
              <h6>
                <input
                  className="inp1"
                  type="password"
                  placeholder="Enter New Password"
                  name="newpassword"
                />
                <i onClick={off} class="ri-eye-off-fill off"></i>
                <i
                  onClick={on}
                  class="ri-eye-fill on"
                  style={{ display: "none" }}
                ></i>
              </h6>
              <h6>
                <input
                  className="inp2"
                  type="password"
                  placeholder="Re-Enter New Password"
                  name="renewpassword"
                />
                <i onClick={offf} class="ri-eye-off-fill offf"></i>
                <i
                  onClick={onn}
                  class="ri-eye-fill onn"
                  style={{ display: "none" }}
                ></i>
              </h6>

              <button type="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default profile;
