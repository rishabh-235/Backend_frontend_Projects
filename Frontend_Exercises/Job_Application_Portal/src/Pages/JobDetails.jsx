import React, { useContext } from "react";
import "./JobDetails.css";
import { useNavigate, useParams } from "react-router-dom";
import JobsContext from "../ContextAPI/JobsProvider";

function JobDetails() {
    const navigate = useNavigate();
    const jobId = useParams().id;
    const {jobs} = useContext(JobsContext);
    const job = jobs.find((job)=> job.id===jobId);

  return (
    <div className="job-details">
      <h1>Job Details</h1>
      <div className="job-details-header">
        <h2>{job.title}</h2>
        <p className="jobid">Job ID: {job.id}</p>
        <p className="company-name">{job.company}</p>
      </div>
      <p className="job-details-description">
        {job.description}
      </p>
      <div className="requirements">
        <span>Requirements:</span>
        <ul>
          {job.requirements.map((item, index)=>(
            <li key={index}>
              {item}
            </li>
          ))
          }
        </ul>
      </div>
      
      <div className="job-details-footer">
      <p className="location">Location: {job.location}</p>
      <p className="salary">Salary: {job.salary}</p>
      <p className="job-type">Job Type: {job.jobType}</p>
      </div>

      <button onClick={()=> navigate(`/apply/${job.id}`)} className="apply-now-btn">Apply Now</button>
    </div>
  );
}

export default JobDetails;
