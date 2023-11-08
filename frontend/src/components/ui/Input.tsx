import { HTMLProps } from "react";
interface Props extends HTMLProps<HTMLInputElement> {}
const Input = (props: Props) => {
  return (
    <div className="w-full flex flex-col gap-2">
      <input
        {...props}
        className={`${props.className} w-full font-medium px-4 h-12 rounded-md active:ring-2 active:ring-blue-500`}
      />
    </div>
  );
};

export default Input;
