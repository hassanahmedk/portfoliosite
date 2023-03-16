/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "../../assets/css/projects.css";

import ProjectCard from "../Projects/ProjectCard";

function Portfolio() {
  return (
    <div className="landing-section landing-projects">
      <div id="project-cards">
        <ProjectCard
          title="ToManage"
          tagline="Revolutionize your management"
          desc="ToManage aims to provide all the task management apps under a single hood. Currently offering ToNoter and ToDoer"
          projectClass="tomanage-head"
          sideClass="tonoter-side"
        />
        <ProjectCard
          title="ToNoter"
          tagline="Notes-taking made easy"
          desc="ToNoter lets you organize your thoughts and plans, and simplify your life by simplifying your notes-taking process."
          projectClass="tonoter-head"
          sideClass="tonoter-side"
        />
        <ProjectCard
          title="ToDoer"
          tagline="A minimalistic todo list"
          desc="ToDoer is the perfect tool to help you stay on top of your daily tasks and accomplish your goals through a minimalistic To Do List."
          projectClass="todoer-head"
          sideClass="todoer-side"
        />
        <ProjectCard
          title="ToNoter API"
          tagline="RESTful API for ToNoter"
          desc="Hosted on Amazon AWS Serverless functions using Vercel, this RESTful API provides backend and database to the ToNoter website."
          projectClass="tonoter-head tonoter-API-head"
          sideClass="tonoter-api"
        />
        <ProjectCard
          title="Weather App"
          tagline="Minimalistic weather app"
          desc="A simple weather app allowing user to fetch Weather conditions of any city in any format using OpenWeather API"
          projectClass="weatherapp-head"
          sideClass="weatherapp-side"
        />
        <ProjectCard
          title="Student Dashboard"
          tagline="Saves you time and energy"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              culpa, distinctio minima accusantium excepturi consequuntur"
          projectClass="student-head"
          sideClass="student-side"
        />
        <ProjectCard
          title="OS Paging Simulator"
          tagline="Memory Management Module"
          desc="Paging simulator, takes frame size and processes, and shows how they'd mapped in pages of RAM in operating system"
          projectClass="os-head"
          sideClass="os-side"
        />
        <ProjectCard
          title="To Noter"
          tagline="Saves you time and energy"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              culpa, distinctio minima accusantium excepturi consequuntur"
          projectClass="tonoter-head"
          sideClass="tonoter-side"
        />
        <ProjectCard
          title="To Noter"
          tagline="Saves you time and energy"
          desc="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem
              culpa, distinctio minima accusantium excepturi consequuntur"
          projectClass="tonoter-head"
          sideClass="tonoter-side"
        />
      </div>
    </div>
  );
}

export default Portfolio;
