import * as React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";

import CodeIcon from "@mui/icons-material/Code";
import ViewQuiltIcon from "@mui/icons-material/ViewQuilt";

export default function ProjectCategory(props) {

  return (
    <Stack direction="row" spacing={1}>
      <Chip
        sx={
          props.categorySelected === "dev"
            ? {
                backgroundColor: "#D7F5DD",
                color: "#0F5D26",
                //  border: "1px solid #054DA7",
                fontWeight: "500",
                fontSize: "1rem",
                padding: "8px",
                "&:hover": {
                  backgroundColor: "#b8f2c4"
                }
              }
            : {
                fontWeight: "500",
                fontSize: "1rem",
                padding: "8px"
                // border: "1px solid #054DA7"
              }
        }
        icon={<CodeIcon color="#054DA7" />}
        label="Development"
        variant={props.categorySelected === "dev" ? "filled" : "outlined"}
        onClick={() => props.changeCategory("dev")}
      />
      <Chip
        sx={
          props.categorySelected === "des"
            ? {
                backgroundColor: "#DDF1FF",
                color: "#054DA7",
                //  border: "1px solid #054DA7",
                fontWeight: "500",
                fontSize: "1rem",
                padding: "8px",
                "&:hover": {
                  backgroundColor: "#c8e4f8"
                }
              }
            : {
                fontWeight: "500",
                fontSize: "1rem",
                padding: "8px"
                // border: "1px solid #054DA7"
              }
        }
        icon={<ViewQuiltIcon color="#054DA7" />}
        label="Design"
        variant={props.categorySelected === "des" ? "filled" : "outlined"}
        onClick={() => props.changeCategory("des")}
      />
    </Stack>
  );
}
