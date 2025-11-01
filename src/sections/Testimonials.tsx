'use client';
import { FC, useState } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import Testimonial from "@/components/Testimonial";
import image1 from '@/assets/images/cat-cat-meme.gif';
import image2 from '@/assets/images/176171-1.jpg';
import image3 from '@/assets/images/Cute-Cat-meme-4xgqu.jpg';

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const testimonials = [
  {
    name: "Mr Boots",
    company: "Private Cats Co.",
    role: "Head of Trend",
    quote:
      "Started my day with coffee and ended it with a Lambo. Guess caffeine does lead to speed 🚗💨.",
    coverImage: image1
  },
  {
    name: "Dogesh Bodmash",
    company: "United Doggy Lovers",
    role: "Founder",
    quote:
      "Brains are awesome. I wish everybody had one 🧠😜",
    coverImage: image2
  },
  {
    name: "Cute Pussy",
    company: "Billi Sanyog Dal",
    role: "Cat Resource (CR)",
    quote:
      "Trying to be a rainbow in someone’s cloud but I think it’s raining ☁️🌈",
    coverImage: image3
  },
];

const Testimonials: FC = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const reference = useRef<HTMLHeadingElement>(null)
  const {scrollYProgress} = useScroll({
    target: reference,
    offset: ["start end", "end start"]
  })
  const topMove = useTransform(scrollYProgress, [0, 1], ["0%", "15%"])
  const bottomMove = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"])

  const handleClickPrev = () => {
    setTestimonialIndex((curr) => {
      if (curr === 0) {
        return testimonials.length - 1;
      }
      return curr - 1;
    })
  }
  const handleClickNext = () => {
    setTestimonialIndex(curr => {
      if (curr === testimonials.length - 1) {
        return 0;
      }
      return curr + 1;
    })
  }

  return (
    <section className="py-24 md:py-32 lg:py-46 xl:py-48">
      <h2 ref={reference} className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl flex flex-col overflow-hidden">
        <motion.span style={{x: topMove}} className="whitespace-nowrap">Some nice words from my past clients</motion.span>
        <motion.span style={{x: bottomMove}} className="whitespace-nowrap self-end text-red-orange-500">Some nice words from my past clients</motion.span>
      </h2>
      <div className="container">
        <div className="mt-20 lg:mt-28">
          <AnimatePresence mode="wait" initial={false}>
            {testimonials.map(({ name, company, role, quote, coverImage }, index) => index === testimonialIndex && (
              <Testimonial key={name+company+role} name={name} company={company} role={role} quote={quote} image={coverImage} />
            ))}
          </AnimatePresence>
        </div>
        <div className="flex gap-4 mt-6 lg:mt-10">
          <button onClick={handleClickPrev} className="size-11 border hover:bg-red-orange-500 hover:text-stone-200 hover:border-red-orange-500 transition-all duration-300 border-stone-400 inline-flex items-center justify-center rounded-full">
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
                d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
              />
            </svg>
          </button>
          <button onClick={handleClickNext} className="size-11 border hover:bg-red-orange-500 hover:text-stone-200 hover:border-red-orange-500 transition-all duration-300 border-stone-400 inline-flex items-center justify-center rounded-full">
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
                d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
