import { Route, Routes, useLocation } from "react-router-dom";

import About from "./Landing/About";
import Services from "./Landing/Services";
import Resume from "./Landing/Resume";
import Portfolio from "./Landing/Portfolio";

import { AnimatePresence } from "framer-motion";

// Landing CSS
import "../assets/css/landing.css";

function Landing() {
  const location = useLocation();
  return (
    <div id="landing">
      <AnimatePresence>
        <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      </AnimatePresence>
    </div>
  );
}

export default Landing;
