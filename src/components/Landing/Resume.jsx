import React from "react";
import { motion } from "framer-motion";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import "../../assets/css/resume.css";
import resumeSVG from "../../assets/images/resume-illus.svg";

import resume from "../../assets/resume/resume.pdf";

function Resume() {
  return (
    <motion.div
      className="landing-resume"
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0, transition: { delay: 0 } }}
    >
      <img className="resume-illus" src={resumeSVG} alt="" />
      <button className="resume-button resume-button-1">
        <a className="resume" target="_blank" href={resume} rel="noreferrer">
          Download Resume <ChevronRightIcon />
        </a>
      </button>
    </motion.div>
  );
}

export default Resume;
