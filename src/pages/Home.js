import React from "react";
import { Link } from 'react-router-dom'
import { SiLinkedin, SiGmail, SiGithub, SiReact, SiBootstrap, SiHtml5, SiCss3, SiJava, SiNodedotjs, SiExpress, SiJquery, SiMongodb, SiJavascript, SiPython, SiVisualstudio, SiGit, SiGnubash, SiPostman, SiHeroku } from "react-icons/si"
import {DiNpm} from 'react-icons/di'
import {AiFillApi} from 'react-icons/ai'
import {FaDownload, FaFillApi} from 'react-icons/fa'
import "../styles/Home.css";

function Home() {
  return (
    <div className="home text-center">
      <div className="about">
        <h2 className="my-5 mx-4"> I'm Salman Sami Khan</h2>
        <div className="prompt mt-5">
          <p>A web development enthusiast with a passion for learning and creating. I Love to learn different tech stacks. Currently I am working with MERN stack.</p>
          <div className="about-logo mt-5">
          <Link to={"https://www.linkedin.com/in/salman-sami-khan-69855a1a0/"}>
            <SiLinkedin />
          </Link>
          <Link to={"mailto:someone@example.com"}>
            <SiGmail />
          </Link>
          <Link to={"https://github.com/SalmanSamiKhan"}>
            <SiGithub />
          </Link>
          <br />
          <Link to={"https://github.com/SalmanSamiKhan/SalmanSamiKhan/raw/main/SALMAN%20SAMI%20KHAN%20CV.pdf"} >
            <h3 className="text-center text-decoration-none" style={{textDecoration:"none"}}> <button className="resume btn btn-primary btn-sm"><FaDownload/><br />Resume</button> </h3>
          </Link>
          </div>
        </div>
      </div>
      <div className="skills mt-5">
        <h1> Skills</h1>
        <ul className="list">
          <li >
            <h2 className="item my-5"> Front-End</h2>
            <span>
              <SiReact/> <SiBootstrap/> <SiHtml5/> <SiCss3/>
            </span>
          </li>
          <li >
            <h2 className="item my-5">Back-End</h2>
            <span>
            <SiNodedotjs/> <SiExpress/> <SiJquery/> <DiNpm/> <SiMongodb/> <AiFillApi/> 
            </span>
          </li>
          <li >
            <h2 className="item my-5">Languages</h2>
            <span>
              <SiJavascript/> <SiJava/> <SiPython/>
            </span>
          </li>
          <li >
            <h2 className="item my-5">Tools</h2>
            <span>
            <SiVisualstudio/> <SiGit/> <SiGithub/> <SiGnubash/> <SiPostman/> <SiHeroku/>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
