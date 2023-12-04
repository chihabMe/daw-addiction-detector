import { twMerge } from "tailwind-merge";
import { useUiContext } from "../../hooks/useUiContext";
import Button from "../ui/Button";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
interface Props {
  className?: string;
}
const DarkLightThemeToggler = (props: Props) => {
  const { theme, toggleThemeMode } = useUiContext();
  const isLight = theme == "light";
  return (
    <div onClick={toggleThemeMode}>
      {isLight && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Button
            className={twMerge(
              "  bg-transparent px-6 hover:ring-yellow-500 active:ring-yellow-500 rounded-lg  ",
              props.className,
            )}
          >
            <SunIcon className="w-5 h-5 text-yellow-500" />
          </Button>
        </motion.div>
      )}
      {!isLight && (
        <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
          <Button
            className={twMerge(
              "bg-transparent px-6 hover:ring-gray-800 active:ring-gray-800 rounded-lg  ",
              props.className,
            )}
          >
            <MoonIcon className="w-4 h-4 text-gray-200" />
          </Button>
        </motion.div>
      )}
    </div>
  );
};

export default DarkLightThemeToggler;

