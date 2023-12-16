import { HTMLProps, ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";
import { useField } from "formik";
interface Props extends HTMLProps<HTMLInputElement> {
  Icon?: ReactNode;
  iconOnClick?: () => void;
  name: string;
}
const Input = ({ Icon, name,disabled, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const [field, meta, _] = useField({ name });
  const hasError = meta.touched && meta.error;
  const valid = meta.touched && !meta.error;

  return (
    <div className={ `  w-full flex flex-col gap-px  py-2` }>
      {props.label && <label className={ `${hasError&&"!text-red-400"} text-text-darker dark:text-text-ligther font-medium font-semibold text-[19px] medium capitalize` }>{props.label}</label>}
      <div
        className={twMerge(
          `transition-all duration-200 ${
            focus && !hasError && "ring-2 ring-blue-400"
          }
          ${hasError && "ring-2 ring-red-400 text-red-400"}
          ${valid && "ring-2  ring-primary"}
          items-center ${disabled&&"opacity-60"} flex justify-between h-[62px] px-4 rounded-md outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium`,
          props.className,
        )}
      >
        <input
          {...props}
          {...field}
          disabled={disabled}
          className="bg-transparent w-full text-sm  outline-none"
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        {Icon && (
          <div onClick={props.iconOnClick} className={props.iconOnClick &&"cursor-pointer"}>
            {Icon}
          </div>
        )}
      </div>
      {hasError && (
        <div>
          <span className="text-red-400">{meta.error}</span>
        </div>
      )}
    </div>
  );
};
export default Input;
