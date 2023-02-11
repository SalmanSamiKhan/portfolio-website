import React from "react";
import { Link } from 'react-router-dom'
import { SiFacebook, SiLinkedin, SiTwitter } from "react-icons/si";
import "../styles/Footer.css";

function Footer() {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <div className="footer">
      <div className="socialMedia">
        <Link to={"https://twitter.com/SalmanSamiiKhan"} target="_blank" rel="noopener noreferrer">
          <SiTwitter  />
        </Link>
        <Link to={"https://www.facebook.com/salmansamikhan"} target="_blank" rel="noopener noreferrer">
          <SiFacebook  />
        </Link>
        <Link to={"https://www.linkedin.com/in/salman-sami-khan-69855a1a0/"} target="_blank" rel="noopener noreferrer">
          <SiLinkedin />
        </Link>
      </div>
      <p> &copy; Salman {year}</p>
    </div>
  );
}

export default Footer;
