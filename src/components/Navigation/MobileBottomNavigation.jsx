import * as React from "react";

import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ViewArrayRoundedIcon from "@mui/icons-material/ViewArrayRounded";
import ArticleIcon from "@mui/icons-material/Article";
import BallotIcon from "@mui/icons-material/Ballot";
import Paper from "@mui/material/Paper";

export default function MobileBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, bgColor:"#f7f7f7" }}
      elevation={3}
      id="mobile-nav"
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        sx={{
          fontFamily: "var(--primary-font)",
          fontWeight: "500",
          backgroundColor:"#f7f7f7"
        }}
      >
        <BottomNavigationAction
          component={Link}
          to="/"
          label="Home"
          icon={<AccountCircleRoundedIcon />}
          sx={{
            fontFamily: "var(--primary-font)",
            
            fontSize: "2rem!important",
          }}
        />

        <BottomNavigationAction
          component={Link}
          to="/portfolio"
          label="Projects"
          icon={<ViewArrayRoundedIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/"
          label="Services"
          icon={<ArticleIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/"
          label="Resume"
          icon={<BallotIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
