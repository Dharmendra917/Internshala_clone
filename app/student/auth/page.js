"use client";
import { asyncsignoutstudent } from "@/store/Actions/studentActions";
import Link from "next/link";
import React from "react";
import { useDispatch } from "react-redux";

// export const metadata = {
//   title: "Student | HomePage",
//   description: "Generated by create next app",
// };

const page = () => {
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(asyncsignoutstudent());
  };

  return (
    <div>
      Authenticated studnet page <br />
      <button onClick={signoutHandler}>signout</button>
    </div>
  );
};

export default page;
