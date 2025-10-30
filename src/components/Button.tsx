import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const Button = (props: { varient: "primary" | "secondary" | "text"; iconAfter?: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, varient, iconAfter, ...rest } = props;
    return (
        <button 
            className={twMerge(
                "h-11 px-6 border border-red-orange-500 rounded-xl uppercase inline-flex items-center justify-center gap-2", 
                varient === "primary" && "bg-red-orange-500 text-white",
                varient === "secondary" && "hover:bg-red-orange-500 hover:text-stone-100 transition-all duration-300 group/button",
                varient === "text" && "relative h-auto px-0 border-transparent after:content-[''] after:h-px after:bg-red-orange-500 after:w-0 after:absolute after:left-0 after:bottom-0 hover:after:w-full after:transition-all after:duration-300",
                className)}
                {...rest}
        >
            <span>{children}</span>
            {iconAfter && <span className="relative z-0">{iconAfter}</span>}
        </button>
    )
}

export default Button