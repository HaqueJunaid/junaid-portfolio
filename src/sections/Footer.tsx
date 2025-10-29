import Button from "@/components/Button";
import { FC } from "react";

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
  return (
    <footer className="bg-stone-950 text-stone-100">
      <div className="container">
        <div className="py-24 md:py-32 lg:py-46 xl:py-48 font-extralight">
          <div className="grid md:grid-cols-5">
            <div className="md:col-span-3">
              <h4 className="flex items-center gap-2 md:text-lg lg:text-xl">
                <div className="size-3 rounded-full bg-green-400 md:size-4"></div>
                <span>One Spot available for next month</span>
              </h4>
              <h2 className="mt-8 md:mt-10 lg:mt-14 text-4xl md:text-5xl lg:text-8xl xl:text-9xl">
                Enough talk. Let&apos;s make something great together.
              </h2>
              <Button
                className="mt-6 md:mt-8 lg:mt-14 xl:mt-16 text-sm md:text-lg lg:text-2xl"
                varient="secondary"
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
                      d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                    />
                  </svg>
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
