import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

// Functional component for rendering an experience card
const ExperienceCard = ({ experience }) => (
  // VerticalTimelineElement represents a single element in the vertical timeline
  <VerticalTimelineElement
    // Styling for the content of the timeline element, afterwards set styling for arrow connecting timeline elements.
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    date={experience.date}
    // Styling for the icon representing the experience
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        {/* Image icon */}
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    {/* Content of the timeline element */}
    <div>
      {/* Title of the experience */}
      <h3 className="text-white text-[24px] font-hold">{experience.title}</h3>
      {/* Name of the company */}
      <p
        className="text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>
    </div>

    {/* List of duties or points related to the experience */}
    <ul className="mt-5 list-disc ml-5 space-y-2">
      {/* Map through each point and render it as a list item */}
      {experience.points.map((point, index) => (
        <li
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider"
        >
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
);

// Functional component for the Experience section
const Experience = () => {
  return (
    <>
      {/* Introduction to the section with animations */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My journey thus far...</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      {/* Container for the vertical timeline */}
      <div className="mt-20 flex flex-col">
        {/* Vertical timeline component */}
        <VerticalTimeline>
          {/* Map through each experience and render it as an ExperienceCard */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Work");
