import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import ApiIcon from '@mui/icons-material/Api';

import DashboardIcon from '@mui/icons-material/Dashboard'
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';


import tomanageLogo from "../../assets/images/project-logos/tomanage-logo.png";
import tomanage from "../../assets/images/project-logos/tomanage.png";
import tomanageT from "../../assets/images/project-logos/tomanage-transparent.png";
import tomanage2 from "../../assets/images/project-logos/tomanage-2.png";

function ProjectIcon(props) {
  if (props.projectClass === "tonoter-head") {
    return (
      <NotesIcon
         className="project-logo"
      />
    );
  } else if (props.projectClass === "weatherapp-head") {
    return <WbSunnyIcon className="project-logo" />;
  } else if (props.projectClass === "tomanage-head") {
    // return <img src={tomanage2} alt="logo" style={{width:"8%"}}/>
    return <CheckCircleOutlineIcon className="project-logo" />;
  } else if (props.projectClass === "todoer-head") {
    return <FormatListBulletedIcon className="project-logo" />;
  } else if (props.sideClass === "tonoter-api") {
    return <ApiIcon className="project-logo" />;
  } else if (props.projectClass === "student-head") {
    return <DashboardIcon className="project-logo" />;
  } else if (props.projectClass === "os-head") {
    return <SettingsSuggestIcon className="project-logo" />;
  }

  
}

export default ProjectIcon;
