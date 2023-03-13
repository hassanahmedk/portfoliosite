import React from "react";

import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ProjectIcon from "./ProjectIcon";


function ProjectCard(props) {


  return (
    <div className="project-card">
      <div className="card-main">
        <div className="card-head">
          <div className={"card-head-img " + props.projectClass}></div>
          <div className="card-head-text">
            <ProjectIcon projectClass={props.projectClass} />
            {props.title}
          </div>
          {/* <img className="" src={tonoterImg} alt="" /> */}
        </div>
        <div className="card-body">
          <div className="card-body-heading">{props.tagline}</div>
          <div className="card-body-desc">{props.desc}</div>
        </div>
      </div>
      <div className={"card-side " + props.projectClass}>
        <a href="#projects">
          <LanguageIcon sx={{ color: "#4078c0" }} className="card-side-icon" />
        </a>
        <a href="#projects">
          <GitHubIcon sx={{ color: "#333" }} className="card-side-icon" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
