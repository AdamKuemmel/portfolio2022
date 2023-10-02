import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";
import { Carousel } from "flowbite-react";
type Props = {
  experiences: Experience[];
};

export default function WorkExperience({ experiences }: Props) {
  return (
    <>
      {/* <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 1.5,
        }}
        className="relative flex flex-col items-center h-screen max-w-full px-10 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
      >
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          experience
        </h3>
        <div className="flex w-full p-10 space-x-5 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-yellow-300/80">
          {experiences?.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </motion.div> */}
      <div className="relative z-0 flex flex-col items-center h-screen pt-20 mx-auto overflow-hidden text-left max-w-7xl md:flex-row justify-evenly">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          experience
        </h3>
        <div className="flex space-x-4 overflow-x-auto">
          {experiences?.map((experience) => (
            <ExperienceCard experience={experience} key={experience._id} />
          ))}
        </div>
      </div>
    </>
  );
}
