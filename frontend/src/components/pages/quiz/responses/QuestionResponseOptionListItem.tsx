import { getAlphabitUsingItsIndex } from "../../../../helpers/getAlphabitUsingItsIndex";
import { useUiContext } from "../../../../hooks/useUiContext";
import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  option: IQuestionResponseOption;
  chosedQuestionId: string;
  index: number;
  setResponseOption: (id: string) => void;
  questionId: string;
}
const QuestionResponseOptionListItem = ({
  option,
  chosedQuestionId,
  setResponseOption,
  questionId,
  index,
}: Props) => {
  const isActive = option.id == chosedQuestionId;
  const { questionDisplayType } = useUiContext();
  return (
    <AnimatePresence>
      <motion.li
        transition={{ delay: 0.1 * index }}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        onClick={() => setResponseOption(option.id)}
        className={`${
          isActive && "ring-[3px]  !ring-primary"
        } active:ring-[4px]   transition duration-300  active:ring-primary p-px rounded-md ring-1 ring-white `}
      >
        <div
          className={`  py-[15px] group rounded-md px-4 text-text-darker dark:text-text-ligther bg-bg-light   dark:bg-dark   flex gap-4  items-center duration-200 cursor-pointer  bg-gray-100  hover:bg-primary hover:!text-white font-medium ${
            isActive && "!text-white !bg-primary"
          }  `}
        >
          <div
            className={`w-4 h-4  flex justify-center items-center rounded-full ring-2 ${
              isActive && "ring-white"
            } ring-blue-500 `}
          >
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.85 }}
                  className={` 
               group-hover:bg-white bg-white group-active:animate-ping    rounded-full w-3 h-3  `}
                ></motion.div>
              )}
            </AnimatePresence>
          </div>
          <p
            className={` 
${
  isActive && "!text-white"
}   font-medium text-sm md:text-base group-hover:text-white   flex gap-2 items-center`}
          >
            <AnimatePresence>
              {questionDisplayType == "letters" && (
                <div
                  className={`${
                    isActive && "!bg-white"
                  } bg-primary w-5 h-5 rounded-full flex justify-center items-center `}
                >
                  <motion.span
                    transition={{}}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{
                      opacity: 0,
                    }}
                    className={` ${
                      isActive && "!text-primary"
                    } font-bold text-xs text-white group-hover:text-white`}
                  >
                    {getAlphabitUsingItsIndex(index)}
                  </motion.span>
                </div>
              )}
            </AnimatePresence>
            <span>{option.text}</span>
          </p>
        </div>
      </motion.li>
    </AnimatePresence>
  );
};

export default QuestionResponseOptionListItem;
