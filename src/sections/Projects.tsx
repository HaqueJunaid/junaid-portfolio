"use client";

import { FC, useState, useRef } from "react";
import placeholder from "@/assets/images/gato-papu.gif";
import Image from "next/image";
import Wresumes from "@/assets/images/WResumes.png";
import Nooter from "@/assets/images/Nooter.png";
import { motion, useMotionValue, useSpring } from "motion/react";

const projects = [
  {
    name: "WResumes",
    description: "AI-powered resume analyzer & portfolio optimization platform.",
    tags: ["Next.js", "Tailwind CSS", "OpenAI API", "DevOps"],
    image: Wresumes,
    url: "https://wresumes.vercel.app",
  },
  {
    name: "Nooter",
    description: "Advanced notes application with clean markdown styling.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: Nooter,
    url: "https://nooter.vercel.app",
  },
  {
    name: "Cloud Sandbox",
    description: "Automated AWS multi-region infrastructure deployment template.",
    tags: ["Terraform", "Docker", "GitHub Actions", "AWS"],
    image: placeholder,
    url: "#",
  },
  {
    name: "CI/CD Pipeline Harness",
    description: "Self-healing enterprise orchestration deployment pipeline.",
    tags: ["Jenkins", "Ansible", "Kubernetes", "GitLab CI"],
    image: placeholder,
    url: "#",
  },
  {
    name: "Metrics Collector",
    description: "Distributed microservices monitoring dashboard prototype.",
    tags: ["Go", "gRPC", "Prometheus", "Docker"],
    image: placeholder,
    url: "#",
  },
];

const Projects: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!listRef.current) return;
    const rect = listRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section id="projects" className="py-24 md:py-32 lg:py-46 xl:py-48">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">Selected Works</h2>

        {/* Mobile View: Tactile Cards */}
        <div className="grid grid-cols-1 gap-6 mt-8 md:hidden">
          {projects.map((proj) => (
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={proj.name + "-mobile"}
              className="flex flex-col bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="aspect-video w-full overflow-hidden relative">
                <Image
                  src={proj.image}
                  alt={proj.name}
                  className="size-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-2xl font-normal text-stone-900">{proj.name}</h3>
                  <p className="text-stone-500 text-sm font-light mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 border border-stone-300 rounded-md text-xs text-stone-500 font-light"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-stone-100">
                  <span className="text-red-orange-500 text-sm font-medium uppercase tracking-wider">
                    View Project
                  </span>
                  <div className="size-9 border border-stone-300 rounded-full flex items-center justify-center text-stone-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Desktop View: Smooth Interactive List with Mouse Follower */}
        <div
          ref={listRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => setHoveredIndex(null)}
          className="relative mt-8 md:mt-10 lg:mt-12 xl:mt-16 hidden md:block"
        >
          {/* Spring-based Floating Image Follower */}
          <motion.div
            style={{
              left: springX,
              top: springY,
              translateX: "-50%",
              translateY: "-50%",
            }}
            animate={{
              scale: hoveredIndex !== null ? 1 : 0,
              opacity: hoveredIndex !== null ? 1 : 0,
            }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute z-20 w-80 lg:w-[420px] aspect-video rounded-3xl overflow-hidden border border-stone-200 shadow-2xl bg-stone-100"
          >
            {projects.map((proj, idx) => (
              <motion.div
                key={proj.name}
                animate={{
                  opacity: hoveredIndex === idx ? 1 : 0,
                  scale: hoveredIndex === idx ? 1 : 0.95,
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 size-full"
              >
                <Image
                  src={proj.image}
                  alt={proj.name}
                  className="size-full object-cover object-top"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Project List Items */}
          {projects.map((proj, idx) => (
            <a
              href={proj.url}
              target="_blank"
              rel="noopener noreferrer"
              key={proj.name}
              onMouseEnter={() => setHoveredIndex(idx)}
              className="flex py-8 border-t border-stone-300 last:border-b group relative overflow-hidden transition-colors duration-300"
            >
              {/* Sliding background hover transition */}
              <div className="absolute inset-0 bg-stone-200/50 h-0 group-hover:h-full transition-all duration-300 bottom-0 left-0 z-0"></div>

              <div className="w-full relative z-10 flex justify-between items-center px-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-3xl lg:text-4xl text-stone-900 group-hover:text-red-orange-500 group-hover:pl-4 transition-all duration-300 font-normal">
                    {proj.name}
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-stone-500 font-light group-hover:pl-4 transition-all duration-300">
                    <span>{proj.description}</span>
                    <span className="text-stone-300">|</span>
                    <div className="flex gap-2">
                      {proj.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 border border-stone-300 rounded-md text-xs group-hover:border-red-orange-500/30 group-hover:text-red-orange-500 transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="size-12 border border-stone-400 rounded-full flex items-center justify-center shrink-0 group-hover:border-red-orange-500 group-hover:bg-red-orange-500 group-hover:text-white transition-all duration-300">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
