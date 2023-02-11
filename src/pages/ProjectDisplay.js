import React from "react";
import { useParams,Link } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/ProjectDisplay.css";
import { SiGithub } from "react-icons/si";
import { BsFillCloudArrowUpFill } from "react-icons/bs";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project container">
      <h1 className="mb-5 image mx-3"> {project.name}</h1>
      <div className="image">
      <img src={project.image} />
      </div>
      <p className="my-5 mx-3">
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.url}>
            <SiGithub />
          </Link>
    </div>
  );
}

export default ProjectDisplay;
