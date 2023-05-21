/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { motion } from "framer-motion";

import "../../assets/css/projects.css";

import ProjectCard from "../Projects/ProjectCard";
import { desProjects, devProjects } from "../../assets/projects/projects";
import ProjectCategory from "../Projects/ProjectCategory";

function Portfolio() {
  let [categorySelected, setCategorySelected] = useState("dev")
  return (
    <motion.div
      className="landing-section landing-projects"
      initial={{ opacity: 0.5, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{
        opacity: 0,
        y: 0,
        x: { type: "spring", stiffness: 100 },
        duration: 0.4,
        delay: 0.1,
      }}
    >
      <div className="projects-top">
        <div className="projects-text">
          <div className="projects-text-heading">
            <span className="first">Projects</span>
            <span className="last">I've Crafted</span>
          </div>
          <div className="projects-text-desc">
            At the heart of my full-stack development and design philosophy is a
            commitment to creating websites that are not only{" "}
            <span className="light">visually-stunning</span>, but also{" "}
            <span className="light">functional</span> and{" "}
            <span className="light"> intuitive.</span>
            <br />
          </div>
        </div>
        <div className="projects-category">
          <ProjectCategory categorySelected={categorySelected} changeCategory={(category)=>setCategorySelected(category)}/>
        </div>
      </div>
      {
        categorySelected === "dev" &&
      <div className="project-cards">
        {devProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tagline={project.tagline}
            desc={project.desc}
            projectClass={project.projectClass}
            sideClass={project.sideClass}
            siteLink={project.siteLink}
            githubLink={project.githubLink}
            projectType="develop"
          />
        ))}
      </div>
      }
      {
        categorySelected === "des" &&
      <div className="project-cards">
        {desProjects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            tagline={project.tagline}
            desc={project.desc}
            projectClass={project.projectClass}
            sideClass={project.sideClass}
            dribbbleLink={project.dribbbleLink}
            figmaLink={project.figmaLink}
            projectType="design"
          />
        ))}
      </div>
}
    </motion.div>
  );
}

export default Portfolio;
