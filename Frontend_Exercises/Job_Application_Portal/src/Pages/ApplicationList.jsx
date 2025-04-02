import React from "react";
import ApplicationCard from "../Components/ApplicationCard";
import "./applicationlist.css";
import { useSelector } from "react-redux";

function ApplicationList() {
  const applications = useSelector((state) => state.application.applications);

  return (
    <div className="application-list-container">
      <h1>Application List</h1>
      {applications.length===0 ? <h3>No Applications yet</h3> : (applications.map((application, index)=>(
        <ApplicationCard key={index} application={application} />
      )))}
    </div>
  );
}

export default ApplicationList;
