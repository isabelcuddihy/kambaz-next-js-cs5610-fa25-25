import { createSlice } from "@reduxjs/toolkit";
import { enrollments } from "../Database";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  enrollments: enrollments,
};
const enrollmentSlice = createSlice({
  name: "enrollments",
  initialState,
  reducers: {
    enrollToCourse: (state, { payload: enrollment }) => {
      const newEnrollment: any = {
  _id: uuidv4(),
  user: enrollment.userId,
  course: enrollment.courseId,
};
      state.enrollments = [...state.enrollments, newEnrollment] as any;
    },
    unenrollFromCourse: (state, { payload: enrollment }) => {
      state.enrollments = state.enrollments.filter(  (e: any) => 
        !(e.user === enrollment.userId && e.course === enrollment.courseId));
    },
    
  },
});
export const { enrollToCourse, unenrollFromCourse } = enrollmentSlice.actions;
export default enrollmentSlice.reducer;