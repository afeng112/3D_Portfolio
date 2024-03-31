import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// Functional component for rendering a project card
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    // Apply fade-in animation to the project card
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      {/* Apply tilt effect to the project card */}
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        // Custom styling for the project card
        className="bg-tertiary p-5 rounded-2xl
         sm:w-[360px] w-full w-full frost-gradient"
      >
        {/* Container for the project image */}
        <div className="relative w-full h-[230px]">
          {/* Project image */}
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
          {/* Container for the GitHub icon */}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* GitHub icon */}
            <div
              // Open the GitHub repository link in a new tab when clicked
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt={"github"}
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Container for the project details */}
        <div className="mt-5">
          {/* Project name */}
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {/* Project description */}
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        {/* Container for project tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {/* Map through each tag and render it */}
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

// Functional component for the Works section
const Works = () => {
  return (
    <>
      {/* Introduction to 'works' with animations */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>My current projects!</h2>
      </motion.div>
      {/* Container for the introductory paragraph */}
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          The following projects that have either been completed or
          work-in-progress, showcase my skills and experience through my passion
          for certain hobbies and real-world skills. Each project that is
          present will be briefly described with along with the links to their
          current repositories if available. The projects reflect upon my
          ability to identify and solve complex problems, adapt and learn new
          technologies and to manage different projects effectively.
        </motion.p>
      </div>

      {/* Container for project cards */}
      <div className="mt-20 flex flex-wrap gap-7">
        {/* Map through each project and render it as a ProjectCard */}
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
