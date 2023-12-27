import { asyncotpsender } from "@/store/Actions/studentActions";
import { useRouter } from "next/navigation";
import React, { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const Otp = ({ sharedata }) => {
  const inp1 = useRef(null);
  const inp2 = useRef(null);
  const inp3 = useRef(null);
  const inp4 = useRef(null);
  const btn = useRef(null);

  const [formdata, setFormData] = useState({
    one: "",
    two: "",
    three: "",
    four: "",
  });
  const [password, setPassword] = useState("");
  const { errors } = useSelector((state) => state.studentReducer);

  // opt onChange Handler
  const [opacity, setOpacity] = useState("0");

  //passwordHandler
  const passwordHandler = (e) => {
    e.preventDefault();
    const pwd = e.target.value;
    setPassword(pwd);

    if (password.length < 5) {
      setOpacity("50");
      btn.current.disabled = true;
    } else {
      setOpacity("100");
      btn.current.disabled = false;
    }
  };

  // console.log(pswd.current.value.length);
  const inputHandler = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    if (inp4.current.value.length > 0 && password.length > 5) {
      setOpacity("100");
      btn.current.disabled = false;
    }
    if (inp4.current.value.length < 1) {
      btn.current.disabled = true;
      setOpacity("50");
    }
    if (inp1.current.value.length === 1) {
      inp2.current.focus();
    }
    if (inp2.current.value.length === 1) {
      inp3.current.focus();
    }
    if (inp3.current.value.length === 1) {
      inp4.current.focus();
    }
    setFormData({ ...formdata, [name]: value.replace(/[^0-9]/g, "") });
  };

  // OTP Email and NewPassword handler
  const dispatch = useDispatch();
  const router = useRouter();
  const otpHandler = async (e) => {
    e.preventDefault();
    const otp =
      `${formdata.one}${formdata.two}${formdata.three}${formdata.four}`.toString();
    const data = {
      otp: otp,
      email: sharedata,
      password: password,
    };

    await dispatch(asyncotpsender(data));
    router.push("/student");

    setFormData({
      one: "",
      two: "",
      three: "",
      four: "",
    });
    setPassword("");
  };

  return (
    <>
      <div>
        <h1 className="text-green-800  font-bold">Enter Your OTP & Password</h1>
        <p className="text-green-500">Please check your mail box.</p>
        <p className="text-green-400 my-4">
          a minimum of 1 lower case letter [a-z] and <br />
          a minimum of 1 upper case letter [A-Z] and <br />
          a minimum of 1 numeric character [0-9] and <br />a minimum of 1
          special character: ~`!@#$%^&*()-_+={}[]|\;:",./?
        </p>
        <p></p>
        <input
          className="focus:border-2 py-2 outline-none border-b-2 border-green-500 w-100 py-2 px-1 my-2"
          type="text"
          placeholder="Enter Your New Password"
          onChange={passwordHandler}
        />
        <form onSubmit={otpHandler} className="   p-2">
          <input
            ref={inp1}
            className="my-1 mx-1 border-b-2 border-green-500 text-blue-700 font-semibold p-3 w-12 h-12 focus:outline-green-500"
            type="text"
            name="one"
            maxLength="1"
            value={formdata.one}
            onChange={inputHandler}
          />
          <input
            ref={inp2}
            className="m-1 border-b-2 border-green-500 text-blue-700 font-semibold p-3 w-12 h-12 focus:outline-green-500"
            type="text"
            name="two"
            maxLength="1"
            value={formdata.two}
            onChange={inputHandler}
          />
          <input
            ref={inp3}
            className="m-1 border-b-2 border-green-500 text-blue-700 font-semibold p-3 w-12 h-12 focus:outline-green-500"
            type="text"
            name="three"
            maxLength="1"
            value={formdata.three}
            onChange={inputHandler}
          />
          <input
            ref={inp4}
            className="m-1 border-b-2 border-green-500 text-blue-700 font-semibold p-3 w-12 h-12 focus:outline-green-500"
            type="text"
            name="four"
            maxLength="1"
            value={formdata.four}
            onChange={inputHandler}
          />
          <br />
          <button
            ref={btn}
            disabled
            className={`px-6 bg-green-800 bg-opacity-${opacity} py-2 my-3 font-semibold text-white rounded-sm`}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Otp;
