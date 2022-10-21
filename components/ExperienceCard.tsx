import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  experience: Experience;
};

export default function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center justify-center flex-shrink-0 w-80 md:w-[600px] xl:w-[900px]  p-5 mt-20 bg-slate-500/40 mx-auto">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={urlFor(experience?.companyImage).url()}
        className="object-contain object-center w-32 h-32 rounded-full xl:w-44 xl:h-44"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-xl font-semibold md:text-3xl">
          {experience?.jobTitle}
        </h4>
        {/* <p className="mt-1 text-2xl font-bold">{experience?.company}</p> */}
        <div className="flex my-2 space-x-2">
          {experience.technologies.map((technology) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt=""
              className="w-10 h-10 rounded-full"
            />
          ))}
        </div>
        {/* <p className="py-5 text-gray-400 uppercase">
          {new Date(experience.dateStarted).toDateString()}-
          {experience.isCurrentyWorkingHere
            ? "Present"
            : new Date(experience?.dateEnded).toDateString()}
        </p> */}
        <ul className="ml-1 space-y-1 overflow-y-scroll text-lg list-disc max-h-96 scrollbar-thin scrollbar-track-black scrollbar-thumb-yellow-300">
          {experience.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
}
