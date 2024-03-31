import React from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

// Define a functional component for rendering technology balls
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {/* Iterate over each technology and render it as a 3D ball */}
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {/* Render the BallCanvas component for each technology */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
