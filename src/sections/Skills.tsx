import Card from "@/components/Card";
import { FC } from "react";
import HTML from "@/assets/icons/html-icon.svg";
import CSS from "@/assets/icons/css-icon.svg";
import JS from "@/assets/icons/javascript-programming-language-icon.svg";
import REACT from "@/assets/icons/react-js-icon.svg";
import NEXT from "@/assets/icons/nextjs-icon.svg";
import GSAP from "@/assets/icons/gsap.svg";
import MOTION from "@/assets/icons/framermotion.svg";
import FLUTTER from "@/assets/icons/flutter-icon.svg";
import FIGMA from "@/assets/icons/figma-icon.svg";
import TAILWINDCSS from "@/assets/icons/tailwind-css-icon.svg";
import REDUX from "@/assets/icons/redux-icon.svg";
import WEBFLOW from "@/assets/icons/webflow.svg";

import NODE from "@/assets/icons/node-js-icon.svg";
import EXPRESS from "@/assets/icons/express-js-icon.svg";
import JAVA from "@/assets/icons/java-programming-language-icon.svg";
import DART from "@/assets/icons/dart-programming-language-icon.svg";
import POSTGRESS from "@/assets/icons/postgresql-icon.svg";
import MYSQL from "@/assets/icons/mysql-icon.svg";
import PYTHON from "@/assets/icons/python-programming-language-icon.svg"
import GRAPHQL from "@/assets/icons/graphql-icon.svg"
import CPP from "@/assets/icons/c-plus-plus-programming-language-icon.svg"
import MONGO from "@/assets/icons/mongodb-svgrepo-com.svg"
import NGNIX from "@/assets/icons/nginx-icon.svg"
import KOTLIN from "@/assets/icons/kotlin-programming-language-icon.svg"


const frontEndtechs = [
  {
    title: "HTML",
    exp: "4",
    image: HTML,
  },
  {
    title: "CSS",
    exp: "4",
    image: CSS,
  },
  {
    title: "JavaScript",
    exp: "4",
    image: JS,
  },
  {
    title: "Tailwindcss",
    exp: "3.5",
    image: TAILWINDCSS,
  },
  {
    title: "GSAP",
    exp: "3",
    image: GSAP,
  },
  {
    title: "Figma",
    exp: "4",
    image: FIGMA,
  },
  {
    title: "React.js",
    exp: "3",
    image: REACT,
  },
  {
    title: "Redux",
    exp: "3",
    image: REDUX,
  },
  {
    title: "Next.js",
    exp: "2.5",
    image: NEXT,
  },
  {
    title: "Motion",
    exp: "3",
    image: MOTION,
  },
  {
    title: "Flutter",
    exp: "2.5",
    image: FLUTTER,
  },
  {
    title: "Webflow",
    exp: "2.5",
    image: WEBFLOW,
  },
];
const backEndtechs = [
  {
    title: "Nodejs",
    exp: "3",
    image: NODE,
  },
  {
    title: "Express",
    exp: "3",
    image: EXPRESS,
  },
  {
    title: "Java",
    exp: "4",
    image: JAVA,
  },
  {
    title: "Python",
    exp: "4",
    image: PYTHON,
  },
  {
    title: "Dart",
    exp: "2.5",
    image: DART,
  },
  {
    title: "Kotlin",
    exp: "3",
    image: KOTLIN,
  },
  {
    title: "C++",
    exp: "4",
    image: CPP,
  },
  {
    title: "Postgress",
    exp: "3",
    image: POSTGRESS,
  },
  {
    title: "Mysql",
    exp: "4",
    image: MYSQL,
  },
  {
    title: "Mongodb",
    exp: "3",
    image: MONGO,
  },
  {
    title: "Graphyql",
    exp: "3",
    image: GRAPHQL,
  },
  {
    title: "Ngnix",
    exp: "2.5",
    image: NGNIX,
  },
];

const Skills: FC = () => {
  return (
    <section className="py-24 md:py-32 lg:py-40 xl:py-44">
      <div className="container">
        <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">
          Some Skills
        </h2>
        <div className="mt-8 md:mt-10 lg:mt-12 xl:mt-16">
          <div className="border border-b-stone-400">
            <h3 className="text-2xl md:text-3xl lg:text-4xl flex gap-2 items-center">
              <span className="block size-3 bg-red-orange-500 rounded-full"></span>
              <span>Frontend Techs</span>
            </h3>
            <div className="py-6 md:py-8 lg:py-10 flex flex-wrap gap-4 md:gap-7">
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
            <h3 className="text-2xl md:text-3xl lg:text-4xl flex gap-2 items-center">
              <span className="block size-3 bg-red-orange-500 rounded-full"></span>
              <span>Backend Techs</span>
            </h3>
            <div className="py-6 md:py-8 lg:py-10 flex flex-wrap gap-4 md:gap-7">
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
      </div>
    </section>
  );
};

export default Skills;
