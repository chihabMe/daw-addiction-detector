import  { ReactNode } from "react";
import { twMerge } from 'tailwind-merge'
interface Props  {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button = ({ children,className, onClick }: Props) => {

  return (
    <button
      onClick={onClick}
      className={twMerge("text-white  shadow-sm hover:shadow-lg px-10 py-4 font-bold rounded-full cursor-pointer bg-primary hover:ring-1 hover:ring-blue-500 active:ring-2 active:ring-blue-500 ",className)} 
    >
      {children}
    </button>
  );
};

export default Button;
