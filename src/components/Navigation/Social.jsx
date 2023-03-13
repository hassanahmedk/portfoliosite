import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Social() {
  return (
    <div className="nav-social">
      <LocalPhoneIcon
        sx={{ fontSize: "2rem", transition:"0.3s all" }}
        className="nav-social-icon nav-social-phone"
      />
      <EmailIcon
        sx={{ fontSize: "2rem", transition:"0.3s all" }}
        className="nav-social-icon nav-social-email"
      />
      <LinkedInIcon
        sx={{ fontSize: "2rem", transition:"0.3s all" }}
        className="nav-social-icon nav-social-linkedin"
      />
      <GitHubIcon
        sx={{ fontSize: "2rem", transition:"0.3s all" }}
        className="nav-social-icon nav-social-github"
      />
    </div>
  );
}

export default Social;
