"use client";
import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";

const layout = ({ children }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentstudent());
  }, []);
  return <>{children}</>;
};

export default layout;
