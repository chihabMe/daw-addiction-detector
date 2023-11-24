import { twMerge } from "tailwind-merge";

const Spinner = ({ className }: { className?: string }) => {
  return (
    <div
      className={twMerge(
        "w-3 h-3 rounded-full    animate-spin border border-dashed border-white border-t-transparent",
        className,
      )}
    ></div>
  );
};

export default Spinner;
