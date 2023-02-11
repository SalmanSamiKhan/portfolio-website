import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/skills"> Skills </Link>
        <Link to="/projects"> Projects </Link>
        <Link to="/experience"> Education </Link>
        <Link to="https://drive.google.com/file/d/1Y1fAsfxyKMTai1MZICXC4rVgWuk4ZkJE/view?usp=sharing" target="_blank" rel="noopener noreferrer"> Resume </Link>
      </div>
    </div>
  );
}

export default Navbar;
