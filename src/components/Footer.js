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
        <Link to={"https://twitter.com/SalmanSamiiKhan"}>
          <SiTwitter  />
        </Link>
        <Link to={"https://www.facebook.com/salmansamikhan"}>
          <SiFacebook  />
        </Link>
        <Link to={"https://www.linkedin.com/in/salman-sami-khan-69855a1a0/"}>
          <SiLinkedin />
        </Link>
      </div>
      <p> &copy; {year} Salman</p>
    </div>
  );
}

export default Footer;
