import React from "react";
import Chip from "@mui/material/Chip";

// import reactIcon from "../../assets/images/icons/react.png"
// import figmaIcon from "../../assets/images/icons/figma.png"

function ProjectChips(props) {
  if (props.projectClass === "tomanage-head") {
    return (
      <div className="project-chips">
        <Chip
        // avatar={<img alt="Natacha" src={reactIcon} />}
          label="React"
          sx={{
            backgroundColor: "#DDF1FF",
            color: "#054DA7",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="Figma"
          // avatar={<img alt="Natacha" src={figmaIcon} style={{transform:"scale(0.8)"}} />}
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
      </div>
    );
  } else if (
    props.projectClass === "tonoter-head" &&
    props.sideClass !== "tonoter-api"
  ) {
    return (
      <div className="project-chips">
        <Chip
          label="React"
          sx={{
            backgroundColor: "#DDF1FF",
            color: "#054DA7",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="Node js"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="MongoDB"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="Redux"
          sx={{
            backgroundColor: "#FFE9E8",
            color: "#A10E25",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Material UI"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
      </div>
    );
  } else if (props.projectClass === "todoer-head") {
    return (
      <div className="project-chips">
        <Chip
          label="Node js"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Express js"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="EJS"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  } else if (props.projectClass === "weatherapp-head") {
    return (
      <div className="project-chips">
        <Chip
          label="Node js"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Express js"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="EJS"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  } else if (props.sideClass === "tonoter-api") {
    return (
      <div className="project-chips">
        <Chip
          label="REST"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Express"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="MVC"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="MongoDB"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="AWS Serverless"
          sx={{
            backgroundColor: "#FFE9E8",
            color: "#A10E25",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  } else if (props.sideClass === "os-side") {
    return (
      <div className="project-chips">
        <Chip
          label="Javascript ES6"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="JQuery"
          sx={{
            backgroundColor: "#FFE9E8",
            color: "#A10E25",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  } else if (props.sideClass === "portfolio-side") {
    return (
      <div className="project-chips">
        <Chip
          label="React"
          sx={{
            backgroundColor: "#DDF1FF",
            color: "#054DA7",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="Figma"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
      </div>
    );
  } else if (props.sideClass === "flightaxisapi-side") {
    return (
      <div className="project-chips">
        <Chip
          label="REST"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Node js"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="MongoDB"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="AWS Serverless"
          sx={{
            backgroundColor: "#FFE9E8",
            color: "#A10E25",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  } else if (props.sideClass === "student-side") {
    return (
      <div className="project-chips">
        <Chip
          label="React"
          sx={{
            backgroundColor: "#FFF8C5",
            color: "#4D2D00",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
          color="success"
        />
        <Chip
          label="Node js"
          sx={{
            backgroundColor: "#F4EAFF",
            color: "#5F35AE",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="MongoDB"
          sx={{
            backgroundColor: "#D7F5DD",
            color: "#0F5D26",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
        <Chip
          label="AWS Serverless"
          sx={{
            backgroundColor: "#FFE9E8",
            color: "#A10E25",
            border: "1px solid rgba(10,10,10,0.2)",
            fontSize: "0.7rem",
          }}
        />
      </div>
    );
  }
  }

export default ProjectChips;
