import React from "react";
import NotesIcon from "@mui/icons-material/Notes";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

function ProjectIcon(props) {
  if (props.projectClass === "tonoter-head") {
    return <NotesIcon />;
  } else if (props.projectClass === "weatherapp-head") {
    return <WbSunnyIcon />;
  }
}

export default ProjectIcon;
