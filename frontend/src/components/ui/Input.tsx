import { HTMLProps, ReactNode } from "react";
import { twMerge } from 'tailwind-merge'
interface Props extends HTMLProps<HTMLInputElement> {
  Icon?:ReactNode;
  iconOnClick?:()=>void;
}
const Input = ({Icon,...props}: Props) => {

  return (
    <div className="w-full flex flex-col gap-2">
      <div  className={twMerge(" items-center flex justify-between   h-[60px] px-4 rounded-lg outline-none bg-white dark:bg-gray-800 w-full text-text-darker dark:text-text-ligther font-medium",props.className)}>
            <input {...props} className="bg-transparent w-full outline-none" />
        <div onClick={props.iconOnClick} className="cursor-pointer">
        {Icon&&Icon}
        </div>
      </div>
    </div>
  );
};

export default Input;
