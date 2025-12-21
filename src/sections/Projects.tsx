import { FC } from "react";
import placeholder from "@/assets/images/gato-papu.gif";
import Image from "next/image";
import Wresumes from "@/assets/images/WResumes.png"
import Nooter from "@/assets/images/Nooter.png"

const projects = [
  {
    name: "WResumes (AI resume analyzer)",
    image: Wresumes,
    url: "https://wresumes.vercel.app"
  },
  {
    name: "Nooter (Advance notes app)",
    image: Nooter,
    url: "https://nooter.vercel.app"
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
          {projects.map(({ name, image, url }) => (
              <a href={url} target="_blank" key={name} className="flex group/projects relative py-6 md:py-8 lg:py-10 last:border-b border-t border-stone-400">
                <div className="w-full h-0 bg-stone-300 absolute bottom-0 left-0 group-hover/projects:h-full transition-all duration-300"></div>
                <div className="w-full relative">
                  <div className="w-full md:absolute md:opacity-0 md:w-64 lg:w-96 md:-top-1/2 md:-translate-y-[25%] lg:-translate-y-1/3 md:right-12 lg:right-16 xl:right-20 md:group-hover/projects:block md:group-hover/projects:opacity-100 transition-all duration-500 aspect-video z-10">
                    <Image src={image} alt={name} className="size-full object-cover object-top" />
                  </div>
                  <div className="mt-8 md:mt-0 flex justify-between items-center">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl group-hover/projects:pl-4 md:group-hover/projects:pl-12 transition-all duration-300">{name}</h3>
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
          )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
