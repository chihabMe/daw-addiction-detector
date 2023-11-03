import React, { ReactNode } from "react";
interface Props  {
  children: ReactNode;
  onClick: () => void;
}
const Button = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className=" text-white px-4 py-2 font-medium rounded-lg cursor-pointer bg-blue-500 hover:ring-1 hover:ring-blue-500 active:ring-2 active:ring-blue-500"
    >
      {children}
    </button>
  );
};

export default Button;
