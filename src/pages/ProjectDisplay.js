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
    <div className="project">
      <h1 className="mb-5"> {project.name}</h1>
      <img src={project.image} />
      <p className="my-5">
        <b>Skills:</b> {project.skills}
      </p>
      <Link to={project.url}>
            <SiGithub />
          </Link>
    </div>
  );
}

export default ProjectDisplay;
