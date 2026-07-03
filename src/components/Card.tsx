import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Iprops {
  title: string;
  image: string | StaticImport;
  exp: string;
}

const Card = (props: Iprops) => {
  const { image, title, exp } = props;
  return (
    <div className="w-full flex items-center gap-4 p-4 bg-stone-200/25 border border-stone-200 rounded-2xl hover:border-red-orange-500/50 hover:bg-white hover:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 cursor-default group shrink-0">
      <div className="size-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center p-2.5 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-sm">
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <span className="text-stone-900 font-medium text-base md:text-lg group-hover:text-red-orange-500 transition-colors duration-300">
          {title}
        </span>
        <span className="text-xs md:text-sm text-stone-500 font-light mt-0.5">
          {exp} {parseFloat(exp) <= 1 ? "Year" : "Years"} Exp
        </span>
      </div>
    </div>
  );
};

export default Card;
