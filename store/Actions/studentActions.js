import axios from "@/utils/axios";
import {
  addstudent,
  removestudent,
  iserror,
  removeerror,
} from "../Reducers/studentReducer";

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
