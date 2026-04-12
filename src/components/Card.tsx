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
        className="md:after:-top-4 md:after:absolute relative flex justify-center items-center bg-stone-200/40 md:after:bg-orange-500 md:after:opacity-0 md:hover:after:opacity-100 hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.04),0px_1px_1px_-0.5px_rgba(0,0,0,0.04),0px_3px_3px_-1.5px_rgba(0,0,0,0.04),_0px_6px_6px_-3px_rgba(0,0,0,0.04),0px_12px_12px_-6px_rgba(0,0,0,0.04),0px_24px_24px_-12px_rgba(0,0,0,0.04)] md:after:px-3 md:after:py-1 border border-stone-200 hover:border-none rounded-md md:after:rounded-md w-16 md:w-36 h-16 md:h-36 md:after:text-stone-200 md:after:text-sm md:after:content-[attr(data-text)] md:hover:scale-105 transition-all md:after:transition-all duration-300 md:after:duration-300"
      >
        <div className="flex justify-center items-center gap-4 p-3">
          <Image
            src={image}
            alt={JSON.stringify(image)}
            className="w-11 md:w-[95px] h-11 md:h-[95px] object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
