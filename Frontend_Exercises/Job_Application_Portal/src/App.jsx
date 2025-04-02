import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Landing from "./Pages/Landing";
import JobDetails from "./Pages/JobDetails";
import ApplicationForm from "./Pages/ApplicationForm";
import ApplicationSummary from "./Pages/ApplicationSummary";
import ApplicationList from "./Pages/ApplicationList";
import Applications from "./Pages/Applications";
import ProfileAndSetting from "./Pages/ProfileAndSetting";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Landing />} />
          <Route path="/job/:id" element={<JobDetails />} />
          <Route path="/apply/:id" element={<ApplicationForm />} />
          <Route path="/applications" element={<Applications />}>
            <Route path="" element={<ApplicationList />} />
            <Route path=":id" element={<ApplicationSummary />} />
          </Route>
          <Route path="/profile" element={<ProfileAndSetting />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
