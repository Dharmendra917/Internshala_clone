"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Home from "@/components/home/Home";
import { asynccurrentstudent } from "@/store/Actions/studentActions";
import { useDispatch } from "react-redux";

// export const metadata = {
//   title: "Homepage ",
// };

const page = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <Home />
    </div>
  );
};

export default page;
