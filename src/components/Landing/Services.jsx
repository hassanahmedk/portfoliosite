import React from "react";
import { motion } from "framer-motion";

function Services() {
  return (
    <motion.div
      className="landing-about"
      initial={{ opacity: 0, y: "10%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%", transition: { delay: 1 } }}
    >
      Services
    </motion.div>
  );
}

export default Services;
