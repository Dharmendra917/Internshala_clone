import axios from "@/utils/axios";
import {
  addstudent,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";
import { current } from "@reduxjs/toolkit";
import { data } from "autoprefixer";

export const asynccurrentstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student");
    dispatch(addstudent(data.student));
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignupstudent =
  (newstudent) => async (dispatch, getState) => {
    try {
      const { data } = await axios.post("/student/signup", newstudent);
      asynccurrentstudent();
    } catch (error) {
      dispatch(iserror(error.response.data.message));
    }
  };

export const asyncsiginstudent = (student) => async (dispatch, getState) => {
  try {
    const { data } = await axios.post("/student/signin", student);
    asynccurrentstudent();
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsignoutstudent = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/student/signout");
    dispatch(removestudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncupdatestudent = (student) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/update/" + _id, student);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncavatarstudent = (formdata) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/avatar/" + _id, formdata);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncresetpassword = (password) => async (dispatch, getState) => {
  try {
    const { _id } = getState().studentReducer.student;
    const { data } = await axios.post("/student/reset-link/" + _id, password);

    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncsendmailer = (email) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/student/send-mail/", email);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};

export const asyncotpsender = (otp) => async (dispatch, getState) => {
  try {
    const data = await axios.post("/student/forget-link/", otp);
    dispatch(asynccurrentstudent());
  } catch (error) {
    dispatch(iserror(error.response.data.message));
  }
};
