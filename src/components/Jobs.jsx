import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import jobsData from "../data/jobsData";

function Jobs() {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search);
  const searchQuery = query.get("search") || "";

  const [filter, setFilter] = useState("");
  const [saved, setSaved] = useState([]);

  const toggleSave = (id) => {
    setSaved((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const filteredJobs = jobsData.filter((job) => {
    return (
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (filter === "" || job.type === filter)
    );
  });

  return (
    <div className="jobs">
      <h1 className="jobs-title">Explore Jobs 💼</h1>

      <div className="filters">
        <button onClick={() => setFilter("Remote")}>Remote</button>
        <button onClick={() => setFilter("Full-Time")}>Full-Time</button>
        <button onClick={() => setFilter("")}>All</button>
      </div>

      <div className="job-list">
        {filteredJobs.map((job) => (
          <div className="card" key={job.id}>

            <div
              className="card-content"
              onClick={() => navigate(`/job/${job.id}`)}
            >
              <div className="card-header">

                {/* LOGO */}
                {job.logo && (
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="company-logo"
                    onError={(e) => (e.target.style.display = "none")}
                  />
                )}

                {/* INITIALS */}
                <div className="company-avatar">
                  {job.company.charAt(0)}
                </div>

                <div className="job-info">
                  <h3>{job.title}</h3>
                  <p>{job.company}</p>
                </div>
              </div>

              <div className="card-body">
                <p className="salary">💰 {job.salary}</p>
                <span className="tag">{job.type}</span>
              </div>
            </div>

            <div className="card-actions">
              <button
                className="apply-btn"
                onClick={() => navigate(`/job/${job.id}`)}
              >
                Apply
              </button>

              <button
                className="save-btn"
                onClick={() => toggleSave(job.id)}
              >
                {saved.includes(job.id) ? "❤️ Saved" : "🤍 Save"}
              </button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Jobs;