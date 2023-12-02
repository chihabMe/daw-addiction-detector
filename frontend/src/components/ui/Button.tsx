import { HTMLProps, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Spinner from "./Spinner";

interface Props extends HTMLProps<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset";
}
const Button = ({
  children,
  isLoading,
  className,
  onClick,
  type,
  ...props
}: Props) => {
  return (
    <button
      {...props}
      type={type}
      onClick={onClick}
      className={twMerge(
        `${
          props.disabled && "opacity-50"
} text-white active:ring-2 active:ring-primary  shadow-sm hover:shadow-lg px-8 py-3 font-bold  transition-all duration-200 flex gap-2 rounded-lg items-center justify-center cursor-pointer bg-primary      `,
        className,
      )}
    >
      {children}
      {isLoading && <Spinner />}
    </button>
  );
};

export default Button;
