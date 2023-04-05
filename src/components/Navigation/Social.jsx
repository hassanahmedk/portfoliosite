import React from "react";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Social() {
  return (
    <div className="nav-social">
      <Tooltip title="+92 341 0218270">
        <Link href="tel:+923410218270" underline="none" target="_blank">
          <LocalPhoneIcon
            sx={{ fontSize: "2rem", transition: "0.3s all" }}
            className="nav-social-icon nav-social-phone"
          />
        </Link>
      </Tooltip>
      <Tooltip title="ihassanahmedkhan@gmail.com">
        <Link href="mailto:ihassanahmedkhan@gmail.com" underline="none" target="_blank">
          <EmailIcon
            sx={{ fontSize: "2rem", transition: "0.3s all" }}
            className="nav-social-icon nav-social-email"
          />
        </Link>
      </Tooltip>
      <Tooltip title="Hassan Ahmed Khan">
        <Link
          href="https://www.linkedin.com/in/ihassanahmedkhan/"
          underline="none" target="_blank"
        >
          <LinkedInIcon
            sx={{ fontSize: "2rem", transition: "0.3s all" }}
            className="nav-social-icon nav-social-linkedin"
          />{" "}
        </Link>
      </Tooltip>
      <Tooltip title="Hassan Ahmed Khan">
        <Link href="https://github.com/mrund3ad1" underline="none" target="_blank">
          <GitHubIcon
            sx={{ fontSize: "2rem", transition: "0.3s all" }}
            className="nav-social-icon nav-social-github"
          />{" "}
        </Link>
      </Tooltip>
    </div>
  );
}

export default Social;
