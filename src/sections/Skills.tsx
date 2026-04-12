import Card from "@/components/Card";
import { FC } from "react";
import { frontEndtechs, devOps, backEndtechs } from "@/const/skills";

const Skills: FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 xl:py-44">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          Some Skills
        </h2>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <div className="border border-b-stone-400">
            <h3 className="flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>Frontend Techs</span>
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-7 py-6 md:py-8 lg:py-10">
              {frontEndtechs.map((tech) => (
                <Card
                  key={tech.title + tech.exp}
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <div className="border border-b-stone-400">
            <h3 className="flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>Backend Techs</span>
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-7 py-6 md:py-8 lg:py-10">
              {backEndtechs.map((tech) => (
                <Card
                  key={tech.title + tech.exp}
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <div className="border border-b-stone-400">
            <h3 className="flex items-center gap-2 text-2xl md:text-3xl lg:text-4xl">
              <span className="block bg-red-orange-500 rounded-full size-3"></span>
              <span>DevOps Techs</span>
            </h3>
            <div className="flex flex-wrap gap-4 md:gap-7 py-6 md:py-8 lg:py-10">
              {devOps.map((tech) => (
                <Card
                  key={tech.title + tech.exp}
                  title={tech.title}
                  exp={tech.exp}
                  image={tech.image}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
