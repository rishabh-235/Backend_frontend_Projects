import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  applications: [],
};

const applicationSlice = createSlice({
  name: "application",
  initialState,
  reducers: {
    addApplication(state, action) {
      const {
        jobId,
        jobName,
        company,
        applicantName,
        email,
        phone,
        experience,
        skills,
        coverLetter,
        startDate,
      } = action.payload;
      const newApplication = {
        jobId,
        jobName,
        company,
        phone,
        email,
        applicantName,
        experience,
        skills,
        coverLetter,
        startDate,
      };

      state.applications.push(newApplication);
    },
    editApplication(state, action) {
      const {
        jobId,
        jobName,
        company,
        applicantName,
        email,
        phone,
        experience,
        skills,
        coverLetter,
        startDate,
      } = action.payload;
      const index = state.applications.findIndex(
        (application) => application.jobId === jobId
      );
      if (index !== -1) {
        state.applications[index] = {
        jobId,
        jobName,
        company,
        applicantName,
        email,
        phone,
        experience,
        skills,
        coverLetter,
        startDate,
        };
      }
    },
    deleteApplication(state, action) {
      const jobId = action.payload;
      const index = state.applications.findIndex(
        (application) => application.jobId === jobId
      );
      if (index !== -1) {
        state.applications.splice(index, 1);
      }
    },
  },
});

export const { addApplication, editApplication, deleteApplication } = applicationSlice.actions;
export default applicationSlice.reducer;
