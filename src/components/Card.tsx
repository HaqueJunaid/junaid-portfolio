import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Iprops {
  title: string;
  image: string | StaticImport;
  exp: string;
}

const Card = (props: Iprops) => {
  const { image, title } = props;
  const text = title;
  return (
    <>
      <div
        data-text={text}
        className="relative w-16 h-16 md:w-36 md:h-36 flex items-center justify-center border border-stone-300 rounded-md md:hover:scale-105 transition-all duration-300 bg-stone-200 hover:border-none hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] md:after:content-[attr(data-text)] md:after:absolute md:after:-top-4 md:after:text-sm md:after:text-stone-200 md:after:px-3 md:after:py-1 md:after:bg-orange-500 md:after:rounded-md md:after:opacity-0 md:hover:after:opacity-100 md:after:transition-all md:after:duration-300"
      >
        <div className="p-3 gap-4 flex items-center justify-center">
          <Image
            src={image}
            alt={JSON.stringify(image)}
            className="object-contain w-11 h-11 md:w-[95px] md:h-[95px]"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
