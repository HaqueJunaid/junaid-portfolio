"use client";
import { FC, useEffect, useRef } from "react";
import heroImage4 from "@/assets/images/hero-image4.png";
import Image from "next/image";
import Button from "@/components/Button";
import { motion, useScroll, useTransform } from "motion/react";
import useTextReavelAniation from "@/hooks/useTextReavel";

const Hero: FC = () => {
  const { scope: heroH1Scope, enterenceAnimation: heroH1Animate } = useTextReavelAniation();
  const scrollDiv = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollDiv,
    offset: ["start end", "end end"],
  });

  const portraitWidth = useTransform(scrollYProgress, [0, 1], ["100%", "240%"]);

  useEffect(() => {
    heroH1Animate();
  }, [heroH1Scope, heroH1Animate]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center pt-32 pb-16 md:py-0">
          <div className="container !max-w-full">
            {/* Live Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 px-3 py-1.5 border border-stone-300 rounded-full text-xs font-semibold uppercase tracking-wider text-stone-600 mb-6 bg-stone-200/30 w-fit"
            >
              <span className="size-2 rounded-full bg-red-orange-500 animate-pulse"></span>
              <span>Available for freelance & full-time roles</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              ref={heroH1Scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative -z-10 text-5xl md:text-6xl lg:text-7xl xl:text-8xl mt-4 md:mt-0 font-normal leading-tight tracking-tight text-stone-900"
            >
              Full‑Stack & DevOps Engineer — building resilient, scalable web platforms
            </motion.h1>

            {/* Description Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-stone-600 text-lg md:text-xl font-light leading-relaxed mt-6 max-w-xl"
            >
              Crafting seamless user experiences and robust cloud infrastructure to help businesses scale and deliver top-tier digital products.
            </motion.p>

            {/* Buttons Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 1.3,
              }}
              className="flex flex-col md:flex-row md:items-center items-start mt-10 gap-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.4,
                }}
              >
                <Button
                  className="hidden md:inline-flex"
                  varient="secondary"
                  iconAfter={
                    <div className="overflow-hidden size-6 relative z-0">
                      <div className="size-6 relative z-0 flex items-center justify-center group-hover/button:translate-y-0 -translate-y-6 transition-all duration-300">
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
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                      <div className="size-6 relative z-0 flex items-center justify-center group-hover/button:translate-y-0 -translate-y-6 transition-all duration-300">
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
                            d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                          />
                        </svg>
                      </div>
                    </div>
                  }
                >
                  View Projects
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.5,
                }}
              >
                <a href="/resume.pdf" download>
                  <Button varient="primary" className="inline-flex md:hidden">
                    Download CV
                  </Button>
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                }}
              >
                <Button
                  className="inline-flex md:hidden"
                  varient="text"
                  iconAfter={
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
                        d="m4.5 5.25 7.5 7.5 7.5-7.5m-15 6 7.5 7.5 7.5-7.5"
                      />
                    </svg>
                  }
                >
                  View my works
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 1.6,
                }}
              >
                <Button className="hidden md:inline-flex" varient="text">
                  Contact Me
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        {/* Right Portrait Image Column */}
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            style={{ width: portraitWidth }}
            className="mt-20 md:mt-0 md:size-full xl:size-full md:absolute md:right-0 max-md:!w-full"
          >
            <Image
              src={heroImage4}
              alt="My Image"
              priority
              className="size-full object-cover object-center"
              style={{
                objectPosition: "50% 50%",
              }}
            />
          </motion.div>
        </div>
      </div>
      <div ref={scrollDiv} className="w-full md:h-[200vh]"></div>
    </section>
  );
};

export default Hero;
