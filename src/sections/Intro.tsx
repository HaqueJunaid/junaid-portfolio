'use client'
import { FC, useEffect } from "react";
import {motion, useAnimate, inView} from 'motion/react';
import SplitType from "split-type";
import { stagger } from "motion";

const Intro: FC = () => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    new SplitType(scope.current, {
      types: 'lines,words',
      tagName: 'span'
    })
  }, [])

  useEffect(() => {
    inView(scope.current, () => {
      animate(scope.current.querySelectorAll("span"), 
      { transform: "translateY(0)" }, { duration: 0.5, delay: stagger(0.15) })
    })
  }, [])

  return <section className="py-24 md:py-32 lg:py-40 xl:py-44 mt-12 md:mt-16 lg:mt-20 xl:mt-24">
    <div className="container">
      <motion.h2 ref={scope} className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl lg:w-[80%]">
        {/* Building beautiful websites with clean code and thoughtful design to help you business grow and stand out online */}
        {/* Crafting modern websites with clean code and creative design to bring ideas to life online */}
        Creating sleek, modern websites that blend creativity, and purpose for a lasting impression
        </motion.h2>
    </div>
  </section>;
};

export default Intro;
