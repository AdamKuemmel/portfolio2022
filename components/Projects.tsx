import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import { Alert, Carousel } from "flowbite-react";
type Props = {
  projects: Project[];
};

export default function Projects({ projects }: Props) {
  return (
    <>
      <div className="relative z-0 flex flex-col items-center h-screen pt-20 mx-auto overflow-hidden text-left max-w-7xl md:flex-row justify-evenly">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
          experience
        </h3>
        <div className="flex space-x-4 overflow-x-auto">
          {projects?.map((project, i) => (
            <article className="flex flex-col items-center justify-center flex-shrink-0 h-[80vh] p-5 mt-10 overflow-y-scroll rounded-lg w-96 bg-slate-500/40">
              <motion.img
                initial={{
                  y: -300,
                }}
                className=" md:h-80"
                transition={{ duration: 1 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt=""
              />
              <div className="max-w-6xl px-0 space-y-5 md:px-10">
                <h4 className="text-xl font-semibold text-center md:text-3xl">
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
            </article>
          ))}
        </div>
      </div>
      {/* <div className="w-full absolute top-[30%] bg-yellow-300/10 left-0 h-[500px] -skew-y-12 z-20" /> */}
    </>
  );
}
