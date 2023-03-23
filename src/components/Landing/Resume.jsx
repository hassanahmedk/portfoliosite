import React from "react";
import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      className="landing-about"
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 0, transition: { delay: 0 } }}
    >
      RESUME specializing in building (and occassionally designing) <br />{" "}
      exceptional digital experiences through websites. Currently, I'm in my
      third year of Software Engineering at National University of Sciences &
      Technology (NUST)
    </motion.div>
  );
}

export default Resume;
