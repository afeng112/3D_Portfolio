import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";

// Higher order component for wrapping sections with animations
const SectionWrapper = (Component, idName) =>
  // Functional component returning another component
  function HOC() {
    return (
      // Section element with motion animation
      <motion.section
        // Animation variants for staggered animations, animations states and options
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        // Custom styling classes for the section
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
      >
        {/* Empty span element with an id */}
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        {/* Render the wrapped component */}
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
