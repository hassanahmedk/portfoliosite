import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ViewArrayRoundedIcon from "@mui/icons-material/ViewArrayRounded";
import ArticleIcon from "@mui/icons-material/Article";
import BallotIcon from "@mui/icons-material/Ballot";
import Paper from "@mui/material/Paper";

export default function MobileBottomNavigation() {
  const location = useLocation();
  console.log(location.pathname);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(() => {
      if (location.pathname === "/") return 0;
      else if (location.pathname === "/portfolio") return 1;
      else if (location.pathname === "/services") return 2;
      else if (location.pathname === "/resume") return 3;
    });
  }, [location]);

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        bgColor: "#f7f7f7",
      }}
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
          backgroundColor: "#f7f7f7",
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
          to="/services"
          label="Services"
          icon={<ArticleIcon />}
        />

        <BottomNavigationAction
          component={Link}
          to="/resume"
          label="Resume"
          icon={<BallotIcon />}
        />
      </BottomNavigation>
    </Paper>
  );
}
