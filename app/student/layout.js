"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";

const layout = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useSelector((state) => state.studentReducer);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asynccurrentstudent());
    if (isAuthenticated) {
      router.push("/student/auth");
    }
  }, [isAuthenticated]);
  return <>{children}</>;
};

export default layout;
