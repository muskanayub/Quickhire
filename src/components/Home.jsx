import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SuccessCarousel from "./SuccessCarousel";

function Home() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  return (
    <div>
      <div className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job 🚀</h1>

          <div className="search-box">
            <input
              placeholder="Search jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={() => navigate(`/jobs?search=${search}`)}>
              Search
            </button>
          </div>

          <button onClick={() => navigate("/jobs")} className="browse-btn">
            Browse Jobs
          </button>
        </div>
      </div>

      <SuccessCarousel />
    </div>
  );
}

export default Home;