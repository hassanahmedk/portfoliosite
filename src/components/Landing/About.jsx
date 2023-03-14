import React from "react";
import { Link } from "react-router-dom";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import SkillChips from "./SkillChips";

import "../../assets/css/about.css";

import profilePic from "../../assets/images/profile-pic-1-transparent.png";
import blobSVG from "../../assets/images/blob.svg";
import blobSVG2 from "../../assets/images/blob-2.svg";


function About() {
  return (
    <div id="about">
      <img src={blobSVG} className="blob blob-1" alt="" />
      <img src={blobSVG2} className="blob blob-2" alt="" />
      <div className="about-top">
        <div className="about-picture">
          <div className="about-picture-container">
            <img src={profilePic} alt="" />
          </div>
        </div>
        <div className="about-name">
          <div className="about-name-top">Hello, I'm</div>
          <div className="about-name-mid">Hassan Ahmed Khan</div>
          <div className="about-name-bottom">
            I build things for the <span>web.</span>{" "}
          </div>
        </div>
      </div>

      <div className="about-bottom">
        <SkillChips />
        <div className="about-desc">
          I'm a <span>full-stack developer</span> specializing in building (and
          occasionally designing) exceptional digital experiences through
          websites using the <span>MERN Stack</span> technologies. Currently,
          I'm in my third year of Software Engineering at National University of
          Sciences & Technology <span> (NUST) </span>.
          <br />
          <br />I stand on a sweet spot where <span>design</span> and{" "}
          <span>code</span> intersects.
          <div className="about-buttons">
            <Link to="services">
              <button className="about-button about-button-1">
                Services <ChevronRightIcon />
              </button>
            </Link>
            <Link to="portfolio">
              <button className="about-button about-button-2">
                Projects <ChevronRightIcon />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

/*
    <div className="landing-section landing-about">
      <div className="landing-about-inner">
        <div className="about-top">Hi, my name is</div>
        <div className="about-mid">
          <div className="about-mid-name">Hassan Ahmed Khan.</div>
          <div className="about-mid-headline">I build things for the web.</div>
        </div>
        <div className="about-bottom">
          I'm a{" "}
          <TypeAnimation
            sequence={[
              "full-stack developer", // Types 'One'
              1000, // Waits 1s
              "back-end developer", // Deletes 'One' and types 'Two'
              2000, // Waits 2s
              "front-end developer", // Types 'Three' without deleting 'Two'
              1000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            
          />
          specializing in building (and occassionally designing) <br /> exceptional
          digital experiences through websites. Currently, I'm in my third year
          of Software Engineering at National University of Sciences &
          Technology (NUST)
          <br /> <br />I stand on a sweet spot where <span> design </span>and
          <span> code</span> intersects.
        </div>
        <Link to="portfolio" className="about-button-container">
          <button className="about-button">Browse Projects</button>
        </Link>
      </div>
    </div>
    */
