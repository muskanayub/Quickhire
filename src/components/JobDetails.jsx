import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import jobsData from "../data/jobsData";

function JobDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobsData.find((j) => j.id === parseInt(id));
  const [applied, setApplied] = useState(false);

  if (!job) return <h2>Job not found</h2>;

  return (
    <div className="job-details">

      <div className="details-card">

        {/* LOGO / AVATAR */}
        {job.logo ? (
          <img
            src={job.logo}
            alt={job.company}
            className="details-logo"
            onError={(e) => (e.target.style.display = "none")}
          />
        ) : (
          <div className="details-avatar">
            {job.company.charAt(0)}
          </div>
        )}

        {/* TEXT */}
        <h1>{job.title}</h1>
        <h3>{job.company}</h3>

        <p className="details-info">💰 {job.salary}</p>
        <p className="details-tag">{job.type}</p>

        <p className="details-desc">
          Join {job.company} as a {job.title}. Work on modern technologies,
          collaborate with teams, and grow your career 🚀
        </p>

        {/* BUTTONS */}
        <div className="details-actions">
          <button
            className="apply-btn"
            onClick={() => setApplied(true)}
          >
            Apply Now
          </button>

          <button
            className="back-btn"
            onClick={() => navigate("/jobs")}
          >
            Back
          </button>
        </div>

        {/* SUCCESS MESSAGE */}
        {applied && (
          <p className="success-msg">✅ Application Successful!</p>
        )}

      </div>
    </div>
  );
}

export default JobDetails;