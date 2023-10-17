import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Student | Sigin-Page",
};

const page = () => {
  return (
    <div>
      Signin-page <br />
      <Link href="/student/signup">signup</Link>
    </div>
  );
};

export default page;
