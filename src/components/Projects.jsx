import React from "react";
import { PROJECTS } from "../constants";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 ">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
        id="Blogs"
      >
        Blogs
      </motion.h1>
      <div className=" max-w-[850px] mx-auto space-y-[50px]">
        {PROJECTS.map((project, index) => (
          <div key={index} className=" flex flex-col sm:flex-row items-center gap-[20px] cursor-pointer"
            onClick={() => {
              window.open(project.link);
            }}
          >
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="flex-shrink-0"
            >
              <img
                src={project.image}

                alt={project.title}
                className=" rounded-[10px] w-[115px] h-[100px] object-cover"
              />
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className=" "
            >
              <h6 className="mb-2 font-bold">{project.title}</h6>
              <p className="">{project.description}</p>

            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
