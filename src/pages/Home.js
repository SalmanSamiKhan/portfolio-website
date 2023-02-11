import React from "react";
import { Link } from 'react-router-dom'
import { SiLinkedin, SiGmail, SiGithub} from "react-icons/si"
import {FaDownload, FaFileDownload } from 'react-icons/fa'
import {FcDownload } from 'react-icons/fc'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home text-center">
      <div className="about-home">
        <h2 className="my-5 mx-4"> I'm Salman Sami Khan</h2>
        <div className="prompt mt-5">
          <p>A web development enthusiast with a passion for learning and creating. I Love to learn different tech stacks. Currently I am working with MERN stack.</p>
          <div className="about-logo mt-5">
          <Link to={"https://www.linkedin.com/in/salman-sami-khan-69855a1a0/"} target="_blank" rel="noopener noreferrer">
            <SiLinkedin />
          </Link>
          <Link to={"mailto:someone@example.com"} target="_blank" rel="noopener noreferrer">
            <SiGmail />
          </Link>
          <Link to={"https://github.com/SalmanSamiKhan"} target="_blank" rel="noopener noreferrer">
            <SiGithub />
          </Link>
          {/* <Link to={"https://drive.google.com/file/d/1Y1fAsfxyKMTai1MZICXC4rVgWuk4ZkJE/view?usp=sharing"} >
            <h3 className="text-center text-decoration-none" style={{textDecoration:"none"}}> <button className="resume btn btn-primary btn-sm"><FaDownload/><br />Resume</button> </h3>
          </Link> */}
          <Link to={"https://drive.google.com/file/d/1Y1fAsfxyKMTai1MZICXC4rVgWuk4ZkJE/view?usp=sharing"} >
            <FaFileDownload/>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
