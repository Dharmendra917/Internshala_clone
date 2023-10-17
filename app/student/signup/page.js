import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Student | Signup-Page",
};

const page = () => {
  return (
    <div>
      signup <br />
      <Link href="/student/signin">signin</Link>
    </div>
  );
};

export default page;
