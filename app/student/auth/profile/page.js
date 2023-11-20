"use client";
import axios from "axios";
import React from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

const profile = () => {
  // const [current, setcurrent] = useState();
  let { student } = useSelector((state) => state.studentReducer);
  console.log(student);

  return <>this is profile page</>;
};

export default profile;
