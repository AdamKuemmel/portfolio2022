import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

export default function SkillCard({ skill, directionLeft }: Props) {
  return (
    <div className="relative flex cursor-pointer group">
      <motion.img
        initial={{ x: directionLeft ? -200 : 200, opacity: 0 }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="object-cover w-24 h-24 transition duration-300 ease-in-out border border-gray-400 rounded-full xl:w-32 xl:h-32 filter group-hover:grayscale md:h-28 md:w-28"
      />
      <div className="absolute w-24 h-24 transition duration-300 ease-in-out rounded-full opacity-0 group-hover:opacity-60 group-hover:bg-white xl:w-32 xl:h-3 md:h-28 md:w-28">
        <div className="flex items-center justify-center h-full">
          <p className="text-3xl font-bold text-black opacity-100">
            {skill?.progress}%
          </p>
        </div>
      </div>
    </div>
  );
}
