import React from "react";

import IosShareIcon from "@mui/icons-material/IosShare";
import LinkIcon from "@mui/icons-material/Link";
import GitHubIcon from "@mui/icons-material/GitHub";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import ProjectIcon from "./ProjectIcon";
import ProjectChips from "./ProjectChips";

import websiteIcon from "../../assets/icons/website.svg";
import githubIcon from "../../assets/icons/github.svg";
import figmaIcon from "../../assets/icons/figma.png";
import dribbbleIcon from "../../assets/icons/dribbble.png";

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
        props.projectType==="develop" &&
        props.siteLink !== "false" && (
          <a href={props.siteLink} target="_blank" rel="noreferrer" style={{cursor:"pointer"}}>
            <img
              src={websiteIcon}
              style={{
  
              }}
              className="card-side-icon"
              alt=""
            />
          </a>
        )}
        {
        props.projectType==="develop" &&
        props.githubLink !== "false" && (
          <a href={props.githubLink} target="_blank" rel="noreferrer" style={{cursor:"pointer"}}>
            <img
              src={githubIcon}
              style={{
    
                width:"34px",
                height:"34px",
              }}
              className="card-side-icon"
              alt=""
            />
          </a>
        )}
        {
        props.projectType==="design" &&
        props.dribbbleLink !== "false" && (
          <a href={props.dribbbleLink} target="_blank" rel="noreferrer" style={{cursor:"pointer"}}>
            <img
              src={dribbbleIcon}
              style={{
    
                width:"34px",
                height:"34px",
              }}
              className="card-side-icon"
              alt=""
            />
          </a>
        )}
        {
        props.projectType==="design" &&
        props.figmaLink !== "false" && (
          <a href={props.figmaLink} target="_blank" rel="noreferrer" style={{cursor:"pointer"}}>
            <img
              src={figmaIcon}
              style={{
    
                width:"34px",
                height:"34px",
              }}
              className="card-side-icon"
              alt=""
            />
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
