import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Student | Homepage",
};

const page = () => {
  return (
    <div className="container">
      student <br />
      <Link href="/student/signup">signup</Link> <br />
      <Link href="/student/signin">signin</Link>
    </div>
  );
};

export default page;
