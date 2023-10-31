import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  student: null,
  errors: [],
  isAuthenticated: false,
};

export const studentReducer = createSlice({
  name: "student",
  initialState,
  reducers: {
    addstudent: (state, action) => {
      state.student = action.payload;
      state.isAuthenticated = true;
    },
    removestudent: (state, action) => {
      state.student = null;
      state.isAuthenticated = false;
    },
    iserror: (state, action) => {
      state.errors.push(action.payload);
    },
    removeerror: (state, action) => {
      state.errors = [];
    },
  },
});

export const { addstudent, removestudent, iserror, removeerror } =
  studentReducer.actions;

export default studentReducer.reducer;
