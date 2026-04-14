import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jobsData from "../data/jobsData";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const suggestions = jobsData.filter((job) =>
    job.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Find Your Dream Job Today🚀</h1>

        <div className="search-box">
          <input
            placeholder="Search jobs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button onClick={() => navigate(`/jobs?search=${search}`)}>
            Search
          </button>

          {search && (
            <div className="suggestions">
              {suggestions.slice(0, 5).map((job) => (
                <div
                  key={job.id}
                  className="suggestion-item"
                  onClick={() => navigate(`/job/${job.id}`)}
                >
                  {job.title} - {job.company}
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          className="browse-btn"
          onClick={() => navigate("/jobs")}
        >
          Browse Jobs
        </button>
      </div>
    </div>
  );
}

export default Home;