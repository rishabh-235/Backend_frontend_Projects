import React from "react";
import "./JobCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function JobCard({job}) {
  const navigate = useNavigate();
  const applications = useSelector((state) => state.application.applications);
  const applied = applications.some((application) => application.jobId === job.id);
  return (
    <div className="job-card">
      <div className="job-card-details">
        <h2>{job.title}</h2>
        <p className="company-name">{job.company}</p>
        <p className="description">
          {job.description}
        </p>
      </div>
      {applied ? (
        <button style={{
          backgroundColor: "gray",
          color: "white",
          cursor: "not-allowed",
          padding: "10px 20px",
          borderRadius: "5px",
          border: "none",
        }} disabled>
          Already Applied
        </button>
      ) : (
        <button
          className="apply-btn"
          onClick={() => navigate(`/apply/${job.id}`)}
        >
          Apply Now
        </button>
      )}
    </div>
  );
}

export default JobCard;
