"use client";
import { FC, useEffect, useRef } from "react";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
import heroImage from "@/assets/images/hero-image.jpg";
import Image from "next/image";
import Button from "@/components/Button";
import { motion, useAnimate, useScroll, useTransform } from "motion/react";
import useTextReavelAniation from "@/hooks/useTextReavel";

const Hero: FC = () => {
  const {scope: heroH1Scope, enterenceAnimation: heroH1Animate} = useTextReavelAniation();
  const [imageScope, imageAnimate] = useAnimate();
  const scrollDiv = useRef<HTMLDivElement>(null);
  const {scrollYProgress} = useScroll({
    target: scrollDiv,
    offset: ['start end', 'end end']
  })
  const portraitWidth = useTransform(scrollYProgress, [0, 1], ['100%', '240%']);

  useEffect(() => {

    imageAnimate(imageScope.current, { opacity: 1, translateY: 0 }, { duration: 0.7 })
    heroH1Animate()
    
  }, [heroH1Scope, heroH1Animate, imageScope, imageAnimate]);

  return (
    <section>
      <div className="grid md:grid-cols-12 md:h-screen items-stretch sticky top-0">
        <div className="md:col-span-7 flex flex-col justify-center">
          <div className="container !max-w-full">
            <motion.h1
              ref={heroH1Scope}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="relative -z-10 text-5xl md:text-6xl lg-text-7xl xl:text-8xl mt-40 md:mt-0"
            >
              {/* Crafting experiences that resonate, not just function */}
              {/* Crafting digital experiences through code and creative design */}
              {/* Creating experiences that matter through thoughtful code */}
              Creating meaningful experiences through crafted code
            </motion.h1>
            <motion.div 
              initial={{opacity: 0}} 
              animate={{opacity: 1}} 
              transition={{
              duration: 0.5,
              delay: 1.2, // This will start after the h1 animation
              }}
              className="flex flex-col md:flex-row md:items-center items-start mt-10 gap-6"
            >
              <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
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
                View my work
              </Button>
              </motion.div>
              <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                delay: 1.6,
              }}
              >
              <a href="/resume.pdf" download>
                <Button varient="primary" className="inline-flex md:hidden">
                Download CV
                </Button>
              </a>
              </motion.div>
              <motion.div
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                delay: 1.8,
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
              initial={{opacity: 0, y: 20}}
              animate={{opacity: 1, y: 0}}
              transition={{
                duration: 0.5,
                delay: 1.8,
              }}
              >
              <Button className="hidden md:inline-flex" varient="text">
                Let&apos;s Talk
              </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="md:col-span-5 relative">
          <motion.div ref={imageScope} initial={{ opacity: 0, translateY: -25 }} style={{width: portraitWidth}} className="mt-20 md:mt-0 md:size-full xl:size-full md:absolute md:right-0  max-md:!w-full">
            <Image
              src={heroImage}
              alt="My Image"
              priority
              className="size-full object-cover"
              style={{
                objectPosition: "50% 20%"
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
