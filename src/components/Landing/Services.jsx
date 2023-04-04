import React from "react";
import { motion } from "framer-motion";

import servicesIllus from "../../assets/images/services-illus.png";
import "../../assets/css/services.css";

function Services() {
  return (
    <motion.div
      className="landing-services"
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0, transition: { delay: 0 } }}
    >
      <div className="services-top">
        <div className="services-text">
          <div className="services-text-heading">
            <span className="first">Full-stack</span>
            <span className="last">Magic </span>
          </div>
          <div className="services-text-desc">
            At the heart of my web development and design philosophy is a
            commitment to creating websites that are not only <span className="light">visually-stunning</span>,
            but also <span className="light">user-friendly</span> and <span className="light"> intuitive.</span> 
            <br />
            With a solid
            foundation in <span className="dark"> MERN</span> and <span className="dark">full-stack development</span>, I'm eager
            to take on new challenges and bring my creative vision to life.
          </div>
        </div>
        <div className="services-illustration">
          <img src={servicesIllus} alt="" />
        </div>
      </div>
      <div className="services-bottom">
        <div className="services-grids">
          <div className="services-grid grid-1  services-grid-active">
            <div> MERN</div>
          </div>

          <div className="services-grid grid-2  services-grid-active">
            <div> Front-end development</div>
          </div>
          <div className="services-grid grid-3  services-grid-active">
            <div> Full-stack development</div>
          </div>
          <div className="services-grid grid-4"></div>
          <div className="services-grid grid-5"></div>
          <div className="services-grid grid-6"></div>
          <div className="services-grid grid-7"></div>
          <div className="services-grid grid-8 services-grid-active">
            <div>Design</div>
          </div>
          <div className="services-grid grid-9 services-grid-active">
            <div>Back-end Development</div>
          </div>
          <div className="services-overlay"></div>
        </div>
      </div>
    </motion.div>
  );
}

export default Services;
