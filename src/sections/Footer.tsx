"use client";
import React, { FC, useEffect, useState } from "react";
import Button from "@/components/Button";
import useTextReavelAniation from "@/hooks/useTextReavel";
import { inView } from "motion";

const Links = [
  {
    title: "Home",
    link: "#top",
  },
  {
    title: "Projects",
    link: "#projects",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "Faqs",
    link: "#faqs",
  },
  {
    title: "Contact",
    link: "#contact",
  },
];

const Footer: FC = () => {
  const { scope, enterenceAnimation } = useTextReavelAniation();
  const [timeString, setTimeString] = useState("");

  useEffect(() => {
    inView(scope.current, () => {
      enterenceAnimation();
    });
  }, [enterenceAnimation, scope]);

  useEffect(() => {
    const updateTime = () => {
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      setTimeString(new Date().toLocaleTimeString("en-US", options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handleLink = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer id="contact" className="bg-stone-950 text-stone-100">
      <div className="container">
        <div className="pt-24 md:pt-32 lg:pt-40 xl:pt-44 pb-12 md:pb-16 lg:pb-20 font-extralight">
          <div className="grid md:grid-cols-5 gap-12 md:gap-8 items-start">
            <div className="md:col-span-3 flex flex-col justify-between h-full">
              <div>
                <h4 className="flex items-center gap-2 md:gap-2.5 md:text-lg lg:text-xl">
                  <div className="size-2.5 rounded-full bg-green-400 md:size-3 animate-pulse"></div>
                  <span>One Spot available for next month</span>
                </h4>
                <h2
                  ref={scope}
                  className="mt-8 md:mt-10 lg:mt-14 text-4xl md:text-5xl lg:text-8xl xl:text-9xl font-extralight leading-none"
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
                  Contact me
                </Button>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                  Get in touch
                </span>
                <a
                  href="mailto:junaid@gmail.com"
                  className="text-xl md:text-2xl font-light text-stone-300 hover:text-red-orange-500 transition-colors duration-300 w-fit"
                >
                  junaid@gmail.com
                </a>
              </div>
            </div>
            <div className="md:col-span-2 flex flex-col md:items-end gap-6 md:justify-between h-full">
              <div className="flex flex-col md:items-end gap-4 w-full">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 md:self-end">
                  Sitemap
                </span>
                <div className="flex flex-col md:items-end gap-3">
                  {Links.map(({ title, link }, index) => (
                    <a
                      href={link}
                      key={title}
                      onClick={(event) => handleLink(event, link)}
                      className="group flex items-center gap-2 text-stone-400 hover:text-red-orange-500 transition-colors duration-300 py-0.5"
                    >
                      <span className="text-red-orange-500 font-light text-xs">
                        0{index + 1}
                      </span>
                      <span className="text-lg md:text-xl font-normal group-hover:translate-x-1.5 transition-transform duration-300">
                        {title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex flex-col md:items-end gap-4 mt-8 pt-8 border-t border-stone-800/80 w-full md:max-w-[200px]">
                <span className="text-xs uppercase tracking-wider font-semibold text-stone-500 md:self-end">
                  Socials
                </span>
                <div className="flex flex-col md:items-end gap-2">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-red-orange-500 transition-colors duration-300 font-light text-sm"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-red-orange-500 transition-colors duration-300 font-light text-sm"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Divider and Bar */}
          <div className="mt-16 md:mt-24 lg:mt-32 pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center gap-6 text-xs md:text-sm text-stone-500 font-light">
            <div>
              <span>&copy; {new Date().getFullYear()} Junaid Haque. All rights reserved.</span>
            </div>
            {timeString && (
              <div className="flex gap-4 items-center">
                <span>Dhaka, BD</span>
                <span className="w-1.5 h-1.5 rounded-full bg-stone-800"></span>
                <span>{timeString} (GMT+6)</span>
              </div>
            )}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-2 hover:text-red-orange-500 transition-colors duration-300 group cursor-pointer focus:outline-none"
              aria-label="Scroll back to top"
            >
              <span>Back to top</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4 group-hover:-translate-y-1 transition-transform duration-300"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
