import React from "react";
import Link from "next/link";
import Home from "@/components/home/Home";
export const metadata = {
  title: "Homepage",
};

const page = () => {
  return (
    <div>
      <Home />
      {/* <Link href="/student">Student</Link> <br />
      <Link href="/employe">Employe</Link> */}
    </div>
  );
};

export default page;
