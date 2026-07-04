"use client";
import React, { FC, useState, useEffect } from "react";
import Button from "@/components/Button";
import { motion, useAnimate, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";
import { useTheme } from "@/app/provider/theme-provider";

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
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
  }, [isOpen, topLineScope, bottomLineScope, topLineAnimate, bottomLineAnimate]);

  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    const target = href === "#" ? "#top" : href;
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsOpen(false);
  };

  return (
    <header id="top">
      {/* Menu Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100vh" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 w-full z-50 overflow-hidden bg-stone-950 flex flex-col justify-between"
          >
            <div className="container h-full flex flex-col justify-between py-12 md:py-20 lg:py-24">
              <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-center h-full pt-12 md:pt-16">
                {/* Left Column - Meta details (desktop only) */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="md:col-span-5 flex flex-col justify-between h-[80%] max-md:hidden border-r border-stone-800/80 pr-12 lg:pr-20"
                >
                  <div className="flex flex-col gap-6">
                    <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                      Navigation
                    </span>
                    <p className="text-lg font-light leading-relaxed text-stone-300">
                      Fullstack Developer & DevOps Engineer focusing on scalable web platforms, CI/CD, and cloud infrastructure.
                    </p>
                  </div>

                  <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-stone-500">
                        Contact Details
                      </span>
                      <a
                        href="mailto:junaidcodes404@gmail.com"
                        className="text-stone-300 hover:text-red-orange-500 transition-colors text-lg font-light"
                      >
                        junaidcodes404@gmail.com
                      </a>
                    </div>
                    <div className="flex gap-6">
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-red-orange-500 transition-colors uppercase tracking-wider text-xs font-medium"
                      >
                        GitHub
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-stone-400 hover:text-red-orange-500 transition-colors uppercase tracking-wider text-xs font-medium"
                      >
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Right Column - Navigation Links */}
                <div className="md:col-span-7 flex flex-col justify-center h-full">
                  <motion.nav
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.08,
                          delayChildren: 0.15,
                        },
                      },
                      exit: {
                        opacity: 0,
                        transition: {
                          staggerChildren: 0.04,
                          staggerDirection: -1,
                        },
                      },
                    }}
                    className="flex flex-col gap-4 md:gap-6"
                  >
                    {navItems.map(({ label, href }, index) => (
                      <div key={label + href} className="overflow-hidden py-1">
                        <motion.div
                          variants={{
                            hidden: { y: "100%" },
                            visible: {
                              y: 0,
                              transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                            },
                            exit: {
                              y: "100%",
                              transition: { duration: 0.3 },
                            },
                          }}
                        >
                          <a
                            href={href}
                            className="flex items-center text-stone-200 hover:text-red-orange-500 group transition-colors duration-300 py-2"
                            onClick={(event) => handleNavigation(event, href)}
                          >
                            <span className="text-red-orange-500 font-light text-sm md:text-base mr-4 md:mr-6">
                              0{index + 1}
                            </span>
                            <span className="text-3xl md:text-5xl lg:text-6xl font-normal group-hover:translate-x-3 transition-transform duration-300">
                              {label}
                            </span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="size-5 md:size-6 lg:size-7 ml-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 text-red-orange-500"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                              />
                            </svg>
                          </a>
                        </motion.div>
                      </div>
                    ))}
                  </motion.nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Header Bar */}
      <div className="fixed top-0 left-0 w-full z-50 backdrop-blur-md mix-blend-difference text-white">
        <div className="container !max-w-full">
          <div className="flex justify-between items-center h-20 ">
            <div>
              <a href="#">
                <div>
                  <span className="text-xl uppercase font-bold">Junaid&nbsp; Haque</span>
                  <div className="text-sm font-light opacity-60">
                    Fullstack & DevOps Engineer <span className="hidden md:inline-block"> — Infrastructure · CI/CD · Cloud </span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Burger Menu Button, Theme Toggle & CV Download */}
      <div className="fixed top-0 left-0 w-full z-50">
        <div className="container !max-w-full">
          <div className="flex justify-end items-center h-20 ">
            <div className="flex items-center justify-center gap-3 md:gap-4">
              {/* Theme Toggle Button */}
                <button
                  className="size-11 border rounded-full inline-flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer relative z-[60] shadow-sm bg-stone-200 border-stone-400 text-stone-900 hover:bg-stone-300 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-700"
                  onClick={toggleTheme}
                  aria-label="Toggle Theme"
                >
                  {mounted && theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rotate-180 transition-transform duration-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m0 13.5V21M5.22 5.22l1.591 1.591m10.378 10.378 1.591 1.591M12 7.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9ZM4.5 12H3m18 0h-1.5M5.22 18.78l1.591-1.591m10.378-10.378 1.591-1.591"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-5 rotate-0 transition-transform duration-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                      />
                    </svg>
                  )}
                </button>

              {/* Burger Menu Button */}
                <button
                  className={twMerge(
                    "size-11 border rounded-full inline-flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer relative z-[60] shadow-sm",
                    isOpen
                      ? "bg-white border-white text-stone-950"
                      : "bg-stone-200 border-stone-400 text-stone-900 hover:bg-stone-300 dark:bg-stone-800 dark:border-stone-700 dark:text-stone-100 dark:hover:bg-stone-700"
                  )}
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label={isOpen ? "Close Menu" : "Open Menu"}
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
                      }}
                    />
                  </svg>
                </button>

              {/* Download CV */}
              <a href="/resume.pdf" download className="relative z-50">
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
