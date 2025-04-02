import React, { useContext } from "react";
import "./applicationcard.css";
import { useNavigate } from "react-router-dom";
import JobsContext from "../ContextAPI/JobsProvider";

const ApplicationCard = ({application}) => {
    const navigate = useNavigate();
    const {jobs} = useContext(JobsContext);

  return (
    <div className="application-card-container">
      <div className="application-description">
        <h3>{application.jobName}</h3>
        <p><strong>Job Id:</strong>{application.jobId}</p>
        <p>
          <strong>Company:</strong> {application.company}
        </p>
        <p>
          <strong>Name:</strong> {application.applicantName}
        </p>
        <p className="application-description-details">
          <strong>Description:</strong>{jobs.find((job)=>job.id===application.jobId).description}
        </p>
      </div>

      <button onClick={()=>navigate(`/applications/${application.jobId}`)} className="view-detials-btn">View Details</button>
    </div>
  );
};

export default ApplicationCard;
