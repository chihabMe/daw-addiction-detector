import { getAlphabitUsingItsIndex } from "../../../../helpers/getAlphabitUsingItsIndex";
import { useUiContext } from "../../../../hooks/useUiContext";
import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  option: IQuestionResponseOption;
  chosedQuestionId: string;
  index: number;
  setResponseOption: (id: string) => void;
}
const QuestionResponseOptionListItem = ({
  option,
  chosedQuestionId,
  setResponseOption,
  index,
}: Props) => {
  const isActive = option.id == chosedQuestionId;
  const {questionDisplayType} = useUiContext()
  return (
    <AnimatePresence>
    <motion.li
      transition={{ delay: 0.1 * index }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      onClick={() => setResponseOption(option.id)}
      className={`${isActive && "ring-[3px] ring-blue-500"} active:ring-[4px] active:ring-primary p-px rounded-md `}
    >
      <div
        className={`  py-[22px] group rounded-md px-4 transition-all  flex gap-4  items-center duration-200 cursor-pointer  bg-gray-100  hover:bg-primary hover:!text-white font-medium ${
          isActive && "!text-white !bg-primary"
        }  `}
      >
        <div
          className={`w-4 h-4  flex justify-center items-center rounded-full ring-2 ${
            isActive && "ring-white"
          } ring-blue-500 `}
        >
          <div
            className={` ${
              isActive && "bg-white"
            } group-hover:bg-white group-active:animate-ping    rounded-full w-3 h-3  `}
          ></div>
        </div>
        <p
          className={` 
${
  isActive && "!text-white"
}   font-medium text-sm md:text-base group-hover:text-white   flex gap-2 items-center`}
        >
          <AnimatePresence>
          {questionDisplayType=="letters"&&
          <motion.span
                transition={{}}
                initial={{opacity:0,scale:0}}
                animate={{opacity:1,scale:1}}
                exit={{
                  opacity:0
                }}

                className={ ` ${isActive&&"text-white"} font-bold text-primary group-hover:text-white` }>
            {getAlphabitUsingItsIndex(index)} 
          </motion.span>
          }
          </AnimatePresence>
          <span>
            {option.text}
          </span>
        </p>
      </div>
    </motion.li>
    </AnimatePresence>
  );
};

export default QuestionResponseOptionListItem;
