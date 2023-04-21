import React from "react";

import IosShareIcon from "@mui/icons-material/IosShare";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ProjectIcon from "./ProjectIcon";
import ProjectChips from "./ProjectChips";

function ProjectCard(props) {
  return (
    <div className="project-card">
      <div className="card-main">
        <div className="card-head">
          <div className={"card-head-img " + props.projectClass}></div>
          <div className="card-head-text">
            <ProjectIcon
              projectClass={props.projectClass}
              sideClass={props.sideClass}
            />
            {props.title}
          </div>
          {/* <img className="" src={tonoterImg} alt="" /> */}
        </div>
        <div className={"card-body " + props.projectClass}>
          <div className={"card-body-heading " + props.projectClass}>
            {props.tagline}
          </div>
          <div className="card-body-desc">{props.desc}</div>
          <div className="card-body-chips">
            <ProjectChips
              projectClass={props.projectClass}
              sideClass={props.sideClass}
            />
          </div>
        </div>
      </div>
      <div className={"card-side " + props.projectClass}>
        {
          props.siteLink !== "false" &&
          <a href={props.siteLink} target="_blank" rel="noreferrer">
            <IosShareIcon
              sx={{
                size: "0.7rem",
                color: "rgba(10,10,10,0.4)",
                "&:hover": {
                  color: "rgba(10,10,10,0.6)",
                },
              }}
              className="card-side-icon"
            />
          </a>
        }
        {
          props.githubLink !== "false" &&
        <a href={props.githubLink} target="_blank" rel="noreferrer">
          <GitHubIcon
            sx={{
              size: "0.7rem",
              color: "rgba(10,10,10,0.4)",
              "&:hover": {
                color: "rgba(10,10,10,0.6)",
              },
            }}
            className="card-side-icon"
          />
        </a>
        }
      </div>
    </div>
  );
}

export default ProjectCard;
