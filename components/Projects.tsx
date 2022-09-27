import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="relative z-0 flex flex-col items-center h-screen max-w-full pt-20 mx-auto overflow-hidden text-left md:flex-row justify-evenly"
    >
      {" "}
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        projects
      </h3>
      <div className="relative z-20 flex w-full overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/30 scrollbar-thumb-yellow-300/80">
        {projects?.map((project, i) => (
          <div
            className="flex flex-col items-center justify-center flex-shrink-0 w-screen h-screen p-20 space-y-2 snap-center md:p-44 snap-mandatory"
            key={i}
          >
            <motion.img
              initial={{
                y: -300,
              }}
              className="h-44 md:h-80"
              transition={{ duration: 1 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />
            <div className="max-w-6xl px-0 space-y-5 md:px-10">
              <h4 className="text-3xl font-semibold text-center">
                <span className="underline decoration-yellow-500/30">
                  Case Study {i + 1} of {projects.length}:
                </span>
                <br />
                {project?.title}
              </h4>
              <div className="flex items-center justify-center space-x-2">
                {project?.technologies.map((tech) => (
                  <img
                    className="w-10 h-10"
                    key={tech._id}
                    src={urlFor(tech.image).url()}
                    alt={tech.title}
                  />
                ))}
              </div>

              <p className="text-center md:text-left">{project?.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-yellow-300/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}
