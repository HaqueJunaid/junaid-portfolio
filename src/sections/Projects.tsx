import { FC } from "react";
import placeholder from "@/assets/images/gato-papu.gif";
import Image from "next/image";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const projects = [
  {
    name: "Yet to select",
    image: placeholder,
  },
  {
    name: "Yet to select",
    image: placeholder,
  },
  {
    name: "Yet to select",
    image: placeholder,
  },
  {
    name: "Yet to select",
    image: placeholder,
  },
  {
    name: "Yet to select",
    image: placeholder,
  },
];

const Projects: FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-46 xl:py-48">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">Selected Works</h2>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          {projects.map(({ name, image }) => 
              <a href="#" key={name} className="flex py-6 md:py-8 lg:py-10 last:border-b border-t border-stone-400">
                <div className="w-full">
                  <div className="w-full md:hidden aspect-video">
                    <Image src={image} alt={name} className="size-full object-cover" />
                  </div>
                  <div className="mt-8 md:mt-0 flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl">{name}</h3>
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
          
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
