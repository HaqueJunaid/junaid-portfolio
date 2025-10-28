import { ButtonHTMLAttributes, ReactNode } from "react"
import { twMerge } from "tailwind-merge";

const Button = (props: { varient: "primary" | "secondary" | "text"; iconAfter?: ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { className, children, varient, iconAfter, ...rest } = props;
    return (
        <button 
            className={twMerge(
                "h-11 px-6 border border-red-orange-500 rounded-xl uppercase inline-flex items-center justify-center gap-2", 
                varient === "primary" && "bg-red-orange-500 text-white",
                varient === "secondary" && "",
                varient === "text" && "h-auto px-0 border-transparent",
                className)}
                {...rest}
        >
            <span>{children}</span>
            {iconAfter && <span>{iconAfter}</span>}
        </button>
    )
}

export default Button