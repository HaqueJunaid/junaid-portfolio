"use client";
import { FC } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";
import { useState, useEffect } from "react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [topLineScope, topLineAnimate] = useAnimate();
  const [bottomLineScope, bottomLineAnimate] = useAnimate();
  const [navScope, navAnimate] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      topLineAnimate([
        [
          topLineScope.current,
          {
            translateY: 4,
          },
        ],
        [
          topLineScope.current,
          {
            rotate: 45,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            translateY: -4,
          },
        ],
        [
          bottomLineScope.current,
          {
            rotate: -45,
          },
        ],
      ]);
    } else {
      topLineAnimate([
        [
          topLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          topLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
      bottomLineAnimate([
        [
          bottomLineScope.current,
          {
            rotate: 0,
          },
        ],
        [
          bottomLineScope.current,
          {
            translateY: 0,
          },
        ],
      ]);
    }
  }, [
    isOpen,
    topLineScope,
    bottomLineScope,
    topLineAnimate,
    bottomLineAnimate,,
    navScope,
    navAnimate
  ]);

  return (
    <header>
      <div
        ref={navScope}
        className={`fixed top-0 left-0 w-full ${isOpen ? "h-screen pointer-events-auto" : "h-0 pointer-events-none"} duration overflow-hidden bg-stone-950 transition-all duration-300`}
        aria-hidden={!isOpen}
      >
        <nav className="relative mt-20 flex flex-col">
            {navItems.map(({ label, href }) => (
              <a key={label + href} href={href} className="!max-w-full text-stone-200 group/link-item relative" onClick={() => setIsOpen(false)}>
                <div className="absolute w-full h-0 bg-stone-800 group-hover/link-item:h-full -z-100 transition-all duration-300 bottom-0"></div>
                <div className="container relative flex justify-between items-center py-6 md:py-8 lg:py-10 xl:py-12 !max-w-full  border-b border-stone-800">
                  <span className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl group-hover/link-item:pl-4 md:group-hover/link-item:pl-12 transition-all duration-300">{label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-5 md:size-6 lg:size-7"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
                </div>
              </a>
            ))}
        </nav>
      </div>
      <div className="fixed top-0 left-0 w-full backdrop-blur-md mix-blend-difference text-white">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20 ">
            <div>
              <a href="#">
                <span className="text-xl uppercase font-bold">
                  Junaid&nbsp; Haque
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed top-0 left-0 w-full">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20 ">
            <div className="flex items-center justify-center gap-4">
              <div
                className="size-11 border border-stone-400 bg-stone-200 rounded-full inline-flex items-center justify-center"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.rect
                    initial={{
                      translateY: 0,
                      rotate: 0,
                    }}
                    ref={topLineScope}
                    x="3"
                    y="7"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 8px",
                      // transform: "translateY(4px) rotate(45deg)"
                    }}
                  />
                  <motion.rect
                    initial={{
                      translateY: 0,
                      rotate: 0,
                    }}
                    ref={bottomLineScope}
                    x="3"
                    y="15"
                    width="18"
                    height="2"
                    fill="currentColor"
                    style={{
                      transformOrigin: "12px 16px",
                      // transform: "translateY(-4px) rotate(-45deg)"
                    }}
                  />
                </svg>
              </div>
              <a href="/resume.pdf" download>
                <Button varient="primary" className="hidden md:inline-flex">
                  Download CV
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
