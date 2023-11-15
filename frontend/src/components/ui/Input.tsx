import { HTMLProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";
interface Props extends HTMLProps<HTMLInputElement> {
  Icon?: ReactNode;
  iconOnClick?: () => void;
  name: string;
  id: string;
}
const Input = ({ Icon, name, id, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const [fields, state, actions] = useField({ name, id });
  const hasError = !state.touched && state.error != undefined;
  const valid = !state.touched && state.error == undefined;
  return (
    <div className="w-full flex flex-col gap-2">
      <div
        className={twMerge(
          ` transition-all duration-200 ${
            focus && !hasError && "ring-2 ring-blue-400"
          }
${hasError && "!ring-2 !ring-red-400 !text-red-400"}

${valid && "!ring-2 !ring-primary "}
items-center flex justify-between   h-[60px] px-4 rounded-lg outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium`,
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
      {hasError && (
        <div>
          <span className="text-red-400">{state.error}</span>
        </div>
      )}
    </div>
  );
};

export default Input;
