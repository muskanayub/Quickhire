import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <h2 className="logo" onClick={() => navigate("/")}>
        QuickHire
      </h2>

      <div className="nav-center">
        <span onClick={() => navigate("/jobs")}>Jobs</span>
        <span onClick={() => navigate("/")}>Home</span>
      </div>

      <button className="nav-btn">Login</button>
    </div>
  );
}

export default Navbar;