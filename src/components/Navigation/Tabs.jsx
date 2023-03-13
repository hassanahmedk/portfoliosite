import React, { useState } from "react";

import { Link, useLocation } from "react-router-dom";

// import aboutFilledIcon from "../../assets/icons/about-filled.png";
// import servicesFilledIcon from "../../assets/icons/services-filled.png";
// import portfolioFilledIcon from "../../assets/icons/portfolio-filled.png";
// import cvFilledIcon from "../../assets/icons/cv-filled.png";

import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import ViewArrayRoundedIcon from '@mui/icons-material/ViewArrayRounded';
import ArticleIcon from "@mui/icons-material/Article";
import BallotIcon from '@mui/icons-material/Ballot';

function Tabs() {

  const currentPage = useLocation().pathname;

  console.log(currentPage);

  let lineStyle = {
    top:"15.2%",
  }

  switch(currentPage){
    case "/":
      lineStyle.top="14.5%";
      break;
    case "/services":
      lineStyle.top="33.3%";
      break;
      case "/portfolio":
      lineStyle.top="52%";
      break;
      case "/resume":
      lineStyle.top="71%";
      break;

    default:
      lineStyle.top="15.2%";
      break;
  }

  return (
    <div className="tabs-container">
      <div className="selected-tab-line" style={lineStyle}></div>
      <div className="nav-tabs">
        <Link
          to="/"
          className={
            currentPage === "/"
              ? "nav-tab nav-tab-1 nav-tab-selected"
              : "nav-tab nav-tab-1"
          }
        >
          {/* <img className="nav-tab-icon" src={aboutFilledIcon} alt="" /> */}
          <AccountCircleRoundedIcon className="nav-tab-icon" />
          <div className="nav-tab-text">About</div>
        </Link>
        <Link
          to="services"
          className={
            currentPage === "/services"
              ? "nav-tab nav-tab-2 nav-tab-selected"
              : "nav-tab nav-tab-2"
          }
        >
          {/* <img className="nav-tab-icon" src={servicesFilledIcon} alt="" /> */}
          <BallotIcon className="nav-tab-icon" />
          <div className="nav-tab-text"> Services</div>
        </Link>
        <Link
          to="portfolio"
          className={
            currentPage === "/portfolio"
              ? "nav-tab nav-tab-3 nav-tab-selected"
              : "nav-tab nav-tab-3"
          }
        >
          {/* <img className="nav-tab-icon" src={portfolioFilledIcon} alt="" /> */}
          <ViewArrayRoundedIcon className="nav-tab-icon" />
          <div className="nav-tab-text"> Projects</div>
        </Link>
        <Link
          to="resume"
          className={
            currentPage === "/resume"
              ? "nav-tab nav-tab-4 nav-tab-selected"
              : "nav-tab nav-tab-4"
          }
        >
          {/* <img className="nav-tab-icon" src={cvFilledIcon} alt="" /> */}
          <ArticleIcon className="nav-tab-icon" />
          <div className="nav-tab-text">Resume</div>
        </Link>
      </div>
    </div>
  );
}

export default Tabs;
