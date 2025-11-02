"use client";
import Button from "@/components/Button";
import useTextReavelAniation from "@/hooks/useTextReavel";
import { FC, useEffect } from "react";
import { inView } from "motion";

const Links = [
  {
    title: "Home",
    link: "#",
  },
  {
    title: "Projects",
    link: "#",
  },
  {
    title: "testimonials",
    link: "#",
  },
  {
    title: "Faqs",
    link: "#",
  },
  {
    title: "Contact",
    link: "#",
  },
];

const Footer: FC = () => {
  const { scope, enterenceAnimation } = useTextReavelAniation();

  useEffect(() => {
    inView(scope.current, () => {
      enterenceAnimation();
    });
  }, []);

  return (
    <footer className="bg-stone-950 text-stone-100">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-46 xl:py-48 font-extralight">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3">
              <h4 className="flex items-center gap-2 md:gap-2.5 md:text-lg lg:text-xl">
                <div className="size-2.5 rounded-full bg-green-400 md:size-3 animate-pulse"></div>
                <span>One Spot available for next month</span>
              </h4>
              <h2
                ref={scope}
                className="mt-8 md:mt-10 lg:mt-14 text-4xl md:text-5xl lg:text-8xl xl:text-9xl"
              >
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                className="mt-6 group/button md:mt-8 lg:mt-14 xl:mt-16 text-sm md:text-lg lg:text-2xl"
                varient="secondary"
                iconAfter={
                  <div className="flex size-5 overflow-hidden">
                    <div className="size-5 relative group-hover/button:-translate-x-full transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                    <div className="size-5 relative group-hover/button:-translate-x-full transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="size-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                        />
                      </svg>
                    </div>
                  </div>
                }
              >
                junaid@gmail.com
              </Button>
            </div>
            <div className="md:col-span-2 mt-12 md:mt-0 md:justify-center flex flex-col md:items-end gap-5 lg:gap-6 xl:gap-8">
              {Links.map(({ title, link }) => (
                <a href={link} key={title}>
                  <Button className="text-xl lg:text-2xl" varient="text">
                    {title}
                  </Button>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
