import { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "submit" | "reset";
}
const Button = ({ children, className, onClick, type, ...props }: Props) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={twMerge(
        `${props.disabled&&"opacity-90"} text-white  shadow-sm hover:shadow-lg px-10 py-4 font-bold rounded-lg transition-all duration-200 cursor-pointer bg-primary hover:ring-1 hover:ring-blue-500 active:ring-2 active:ring-blue-500 `,
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
