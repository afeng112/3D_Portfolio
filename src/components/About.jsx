import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm an upcoming software developer with experience using TypeScript,
        JavaScript, expertise in utilizing frameworks such as React.js, Node.js
        and Three.js. I also have experience using Python and I'm currently
        learning C# as well. Whilst I'm currently relatively new, I'm a quick
        learner and can collaborate with clients and other team members to
        develop efficient and user-friendly solutions, I more than happy to work
        with others to bring ideas to life!
      </motion.p>
    </>
  );
};

export default About;
