"use client";
import React, { useRef } from "react";
import Link from "next/link";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { asyncsendmailer } from "@/store/Actions/studentActions";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import Otp from "@/components/otp/Otp";

const Forgot = () => {
  const btn = useRef(null);

  const [email, setEmail] = useState("");
  const [sharedata, setShareData] = useState("");
  const [error, setError] = useState("");

  //onChange handler to change data on time
  const onChange = (e) => {
    setEmail(e.target.value);
    setShareData(e.target.value);
    e.preventDefault();
    if (e.target.value.length > 0) {
      btn.current.disabled = false;
      btn.current.style.backgroundColor = "#00044adf";
    } else {
      btn.current.disabled = true;
      btn.current.style.backgroundColor = "rgba(47, 47, 128, 0.687)";
    }
  };
  //emailsubmit function
  const [section, setSection] = useState(true);
  const dispatch = useDispatch();
  const router = useRouter();
  const { errors } = useSelector((state) => state.studentReducer);

  const emailHandler = async (e) => {
    e.preventDefault();
    const data = {
      email: email,
    };

    await dispatch(asyncsendmailer(data));

    if (errors.length === 1) {
      setSection(false);
      setError("");
    } else {
      setSection(true);
      setError(errors);
    }

    setEmail("");
  };

  return (
    <>
      <div className="container d-flex flex-col items-center gap-32 mt-1 bg-slate-100">
        <nav className="d-flex py-2 px-4 w-full justify-between items-center font-semibold">
          <span className="w-12 h-12 border-blue-200 font-bold border-2 rounded-full d-flex justify-center items-center cursor-pointer">
            <i class="ri-arrow-left-line"></i>
          </span>
          <span>
            Not a member?
            <Link className="text-blue-300" href="/student/signup">
              Sign up now
            </Link>
          </span>
        </nav>
        {section ? (
          <section className=" p-2 my-1 max-w-screen-sm">
            <p className="text-6xl text-center text-blue-900">
              <i class="ri-lock-2-fill"></i>
            </p>
            <h3 className="py-3 text-blue-700 font-bold">Forgot Password?</h3>
            <p className="py-2 text-slate-600 font-semibold">
              Enter the email address you used when you joined and we'll send
              you <br /> instructions to reset your password.
            </p>
            <p className="py-2 text-slate-700 font-semibold">
              For security reasons, we do NOT store your password. So rest{" "}
              <br /> assured that we will never send your password via email.
            </p>

            <p className="text-red-500">{error}</p>
            <form onSubmit={emailHandler} className="mt-1">
              <input
                className="w-full px-3 focus:border-2 py-2 outline-none border-b-2 border-blue-400"
                type="email"
                placeholder="Enter your Email address"
                onChange={onChange}
                value={email}
                required
              />
              <button
                ref={btn}
                disabled
                style={{ background: "rgba(47, 47, 128, 0.687)" }}
                className="px-6 py-2 my-3 font-semibold text-white rounded-sm"
                type="submit"
              >
                Send Email
              </button>
            </form>
          </section>
        ) : (
          <Otp sharedata={sharedata} />
        )}
      </div>
    </>
  );
};

export default Forgot;
