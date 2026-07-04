"use client";

import { FC, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "It depends on the complexity of the website and the scope of the project.",
  },
  {
    question: "What is your development process like?",
    answer:
      "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
  },
];

const FAQs: FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="py-24 md:py-32 lg:py-46">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-20">
          {/* Header Column */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl md:text-7xl lg:text-8xl xl:text-9xl">FAQs</h2>
            <p className="text-stone-600 dark:text-stone-400 mt-6 text-lg md:text-xl font-light leading-relaxed">
              Have questions? Find answers to frequently asked questions about my process, services, and experience.
            </p>
          </div>

          {/* Accordion Column */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {faqs.map((item, index) => {
                const isOpen = selectedIndex === index;
                return (
                  <div
                    key={item.question}
                    className="border-t border-stone-300 dark:border-stone-800 last:border-b transition-colors duration-300"
                  >
                    <button
                      className="w-full flex justify-between items-center py-6 md:py-8 text-left group outline-none focus-visible:text-red-orange-500"
                      onClick={() => setSelectedIndex(isOpen ? null : index)}
                    >
                      <span className="text-xl md:text-2xl lg:text-3xl text-stone-900 dark:text-stone-100 group-hover:text-red-orange-500 transition-colors duration-300 pr-8 font-normal">
                        {item.question}
                      </span>
                      <div
                        className={twMerge(
                          "size-11 border border-stone-400 dark:border-stone-600 inline-flex items-center justify-center rounded-full shrink-0 transition-all duration-300",
                          isOpen && "bg-red-orange-500 text-stone-100 border-red-orange-500"
                        )}
                      >
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="relative size-6 flex items-center justify-center"
                        >
                          {/* Horizontal Line */}
                          <div
                            className={twMerge(
                              "absolute w-4 h-0.5 bg-stone-900 dark:bg-stone-100 rounded-full transition-colors duration-300",
                              isOpen ? "bg-stone-100" : "group-hover:bg-red-orange-500"
                            )}
                          />
                          {/* Vertical Line */}
                          <div
                            className={twMerge(
                              "absolute w-0.5 h-4 bg-stone-900 dark:bg-stone-100 rounded-full transition-colors duration-300",
                              isOpen ? "bg-stone-100" : "group-hover:bg-red-orange-500"
                            )}
                          />
                        </motion.div>
                      </div>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial="collapsed"
                          animate="open"
                          exit="collapsed"
                          variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                          }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-8 text-stone-600 dark:text-stone-400 text-base md:text-lg leading-relaxed lg:w-[90%] pr-4 md:pr-16">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
