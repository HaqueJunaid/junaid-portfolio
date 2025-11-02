import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Iprops {
  title: string;
  image: string | StaticImport;
  exp: string;
}

const Card = (props: Iprops) => {
  const { image } = props;
  return (
    <div className="w-18 h-18 md:w-36 md:h-36 flex items-center justify-center border border-stone-300 rounded-md md:hover:scale-105 transition-all duration-300 bg-stone-200 hover:border-none hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
      <div className="p-3 gap-4 flex items-center justify-center">
        <Image
          src={image}
          alt={JSON.stringify(image)}
          className="object-contain w-11 h-11 md:w-[95px] md:h-[95px]"
        />
      </div>
    </div>
  );
};

export default Card;
