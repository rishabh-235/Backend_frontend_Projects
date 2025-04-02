import React, { useContext } from "react";
import JobCard from "../Components/JobCard";
import "./Landing.css";
import JobsContext from "../ContextAPI/JobsProvider";

function Landing() {
  const {jobs} = useContext(JobsContext);

  return (
    <div className="landing-page">
      <h1>Job Openinigs</h1>
      {
        jobs.map((job, index)=>(
          <JobCard key={index} job={job} />
        ))
      }
    </div>
  );
}

export default Landing;
