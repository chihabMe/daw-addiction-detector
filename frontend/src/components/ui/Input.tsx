import { HTMLProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";
interface Props extends HTMLProps<HTMLInputElement> {
  Icon?: ReactNode;
  iconOnClick?: () => void;
  name: string;
}
const Input = ({ Icon, name, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const [fields, state, actions] = useField({ name });
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className={twMerge(
          ` transition-all duration-200 ${focus && "ring-2 ring-blue-400"}
${
  state.error && "ring-2 ring-red-4000"
} items-center flex justify-between   h-[60px] px-4 rounded-lg outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium`,
          props.className,
        )}
      >
        <input
          {...props}
          {...fields}
          className="bg-transparent w-full outline-none"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {Icon && (
          <div onClick={props.iconOnClick} className="cursor-pointer">
            {Icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
