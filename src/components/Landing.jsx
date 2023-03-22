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
      <script
        src="https://static.elfsight.com/platform/platform.js"
        data-use-service-core
        defer
      ></script>
      <div class="elfsight-app-14e66b26-e4a6-4636-b2ac-0411a7bfb747"></div>
    </div>
  );
}

export default Landing;
