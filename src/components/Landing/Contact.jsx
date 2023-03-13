import React from "react";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Contact() {
  return (
    <>
      <div className="about-contact">
        <LocalPhoneIcon
          sx={{ fontSize: "1.7rem", transition: "0.3s all" }}
          className="about-contact-icon about-contact-phone"
        />
        +92 341 0218270
      </div>
      <div className="about-contact">
        <EmailIcon
          sx={{ fontSize: "1.7rem", transition: "0.3s all" }}
          className="about-contact-icon about-contact-email"
        />
        ihassanahmedkhan@gmail.com
      </div>
      <div className="about-contact">
        <LinkedInIcon
          sx={{ fontSize: "1.7rem", transition: "0.3s all" }}
          className="about-contact-icon about-contact-linkedin"
        />
        /u/hassanahmedkhan
      </div>
      <div className="about-contact">
        <GitHubIcon
          sx={{ fontSize: "1.7rem", transition: "0.3s all" }}
          className="about-contact-icon about-contact-github"
        />
        /mrund3ad1
      </div>
    </>
  );
}

export default Contact;
