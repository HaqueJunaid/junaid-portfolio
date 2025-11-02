import useTextReavelAniation from "@/hooks/useTextReavel";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import React, { HTMLAttributes, useEffect } from "react";
import { twMerge } from "tailwind-merge";
import { usePresence } from "motion/react";
import {motion} from 'motion/react';

const Testimonial = (
  props: {
    name: string;
    quote: string;
    role: string;
    company: string;
    image: string | StaticImport;
    className?: string;
  } & HTMLAttributes<HTMLDivElement>
) => {
  const { name, quote, role, company, image, className, ...rest } = props;

  const {scope: quoteScope, enterenceAnimation: quoteEnterenceAnimate, exitAnimation: exitQutoeAnimation} = useTextReavelAniation();
  const {scope: citeScope, enterenceAnimation: citeEnterenceAnimate, exitAnimation: exitCiteAnimation} = useTextReavelAniation();
  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    if (isPresent) {
      quoteEnterenceAnimate()
      .then(() => {
        citeEnterenceAnimate();
      })
    } else {
      exitQutoeAnimation()
        .then(() => {
          safeToRemove();
          exitCiteAnimation();
        })
    }
  }, [isPresent, safeToRemove, quoteScope, quoteEnterenceAnimate, citeScope, citeEnterenceAnimate, exitCiteAnimation, exitQutoeAnimation])

  return (
    <div
      className={twMerge(
        "grid md:grid-cols-5 md:gap-8 lg:gap-16 xl:gap-24 md:items-center",
        className
      )}
      {...rest}
    >
      <div className="aspect-square md:col-span-2 md:aspect-[9/12] relative">
      <motion.div initial={{width: "100%"}} animate={{width: "0%"}} exit={{width: '100%'}} transition={{duration: 0.6, ease: "easeInOut"}} className="h-full bg-stone-950 absolute"></motion.div>
        <Image
          src={image}
          alt={image + " " + name}
          className="size-full object-cover"
        />
      </div>
      <blockquote className="md:col-span-3">
        <div ref={quoteScope} className="text-3xl md:text-5xl lg:text-6xl xl:text-8xl mt-8 md:mt-0">
          <span>&ldquo;</span>
          {quote}
          <span>&rdquo;</span>
        </div>
        <cite ref={citeScope} className="block mt-4 md:mt-8 xl:mt-12 not-italic md:text-lg lg:text-xl xl:text-2xl">
          {name}, {role} at {company}
        </cite>
      </blockquote>
    </div>
  );
};

export default Testimonial;
