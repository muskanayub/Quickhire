import React, { useState } from "react";
import { useParams } from "react-router-dom";
import jobsData from "../data/jobsData";

function JobDetails() {
  const { id } = useParams();
  const job = jobsData.find((j) => j.id == id);

  const [applied, setApplied] = useState(false);

  return (
    <div className="job-details">
      <div className="details-card">
        <img src={job.logo} className="details-logo" />

        <h2>{job.title}</h2>
        <h3>{job.company}</h3>

        <p>{job.salary}</p>
        <p>{job.type}</p>

        <button onClick={() => setApplied(true)}>Apply Now</button>

        {applied && <p className="success">Applied Successfully!</p>}
      </div>
    </div>
  );
}

export default JobDetails;