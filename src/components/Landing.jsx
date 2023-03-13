import { Route, Routes } from "react-router-dom"

import About from "./Landing/About";
import Services from "./Landing/Services";
import Resume from "./Landing/Resume";
import Portfolio from "./Landing/Portfolio";



// Landing CSS
import "../assets/css/landing.css";

function Landing() {
    return (
      <div id="landing">

      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
         
      </div>
    )
  }
  
  export default Landing