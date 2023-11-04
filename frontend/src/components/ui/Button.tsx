import  { ReactNode } from "react";
interface Props  {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
const Button = ({ children,className, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className={` ${className} text-white  shadow-lg px-10 py-4 font-bold rounded-full cursor-pointer bg-blue-500 hover:ring-1 hover:ring-blue-500 active:ring-2 active:ring-blue-500 `}
    >
      {children}
    </button>
  );
};

export default Button;
