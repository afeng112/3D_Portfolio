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

// Create new experience card
const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    // Set styling of the cards
    contentStyle={{ background: "#1d1836", color: "#fff" }}
    contentArrowStyle={{ borderRight: "7px solid #232631" }}
    // Set styling of the date to the right of the icons.
    date={experience.date}
    // Print out icon, change background for every 2nd workplace.
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div>
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      {/* Prints out title for each workplace. */}
      <h3 className="text-white text-[24px] font-hold">{experience.title}</h3>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      {/* Create experience section */}
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My journey thus far...</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>
      <div className="mt-20 flex flex-col">
        {/* Using the vertical timeline module, print out my workplace experiences. */}
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "Work");
