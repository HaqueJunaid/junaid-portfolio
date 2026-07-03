"use client";

import Card from "@/components/Card";
import { FC } from "react";
import { frontEndtechs, devOps, backEndtechs } from "@/const/skills";
import { motion } from "motion/react";

const Skills: FC = () => {
  return (
    <section id="skills" className="py-24 md:py-32 lg:py-40 xl:py-44">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          Some Skills
        </h2>

        {/* DevOps Section */}
        <div className="mt-16 md:mt-20 lg:mt-24">
          <div className="border-b border-stone-300 pb-4 md:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="flex items-center gap-2.5 text-2xl md:text-3xl lg:text-4xl font-normal text-stone-900">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>DevOps & Infrastructure</span>
            </h3>
            <p className="text-stone-500 text-sm md:text-base font-light max-w-md">
              Deploying automated CI/CD pipelines, containerized architectures, and scaling cloud infrastructure.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 md:py-8 lg:py-10">
            {devOps.map((tech, index) => (
              <motion.div
                key={tech.title + tech.exp}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              >
                <Card
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Backend Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="border-b border-stone-300 pb-4 md:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="flex items-center gap-2.5 text-2xl md:text-3xl lg:text-4xl font-normal text-stone-900">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>Backend & APIs</span>
            </h3>
            <p className="text-stone-500 text-sm md:text-base font-light max-w-md">
              Developing robust, high-performance backends, RESTful/GraphQL APIs, and managing databases.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 md:py-8 lg:py-10">
            {backEndtechs.map((tech, index) => (
              <motion.div
                key={tech.title + tech.exp}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              >
                <Card
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Frontend Section */}
        <div className="mt-12 md:mt-16 lg:mt-20">
          <div className="border-b border-stone-300 pb-4 md:pb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h3 className="flex items-center gap-2.5 text-2xl md:text-3xl lg:text-4xl font-normal text-stone-900">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>Frontend & UX</span>
            </h3>
            <p className="text-stone-500 text-sm md:text-base font-light max-w-md">
              Building responsive web applications with smooth interactive animations and modern UI frameworks.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 py-6 md:py-8 lg:py-10">
            {frontEndtechs.map((tech, index) => (
              <motion.div
                key={tech.title + tech.exp}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.4) }}
              >
                <Card
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
