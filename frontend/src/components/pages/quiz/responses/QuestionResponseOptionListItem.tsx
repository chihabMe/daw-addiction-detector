import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";
import { motion } from "framer-motion";

interface Props {
  option: IQuestionResponseOption;
  chosedQuestionId: string;
  index:number;
  setResponseOption: (id: string) => void;
}
const QuestionResponseOptionListItem = ({
  option,
  chosedQuestionId,
  setResponseOption,
  index

}: Props) => {
  const isActive = option.id == chosedQuestionId;
  return (
    <motion.li
      transition={{delay:0.1*index}}
      initial={{opacity:0,y:-20}}
      animate={{opacity:1,y:0}}
      exit={{ opacity: 0, y: -20 }}

      onClick={() => setResponseOption(option.id)} className={`${isActive&&"ring-[3px] ring-blue-500"} p-px rounded-md `}>
      <div
        className={`  py-[22px] group rounded-md px-4 transition-all  flex gap-4  items-center duration-200 cursor-pointer  bg-gray-100  hover:bg-blue-500 hover:!text-white font-medium ${
          isActive && "!text-white !bg-blue-500"
        }  `}
      >
        <div
          className={`w-4 h-4 flex justify-center items-center rounded-full ring-2 ${
            isActive && "ring-white"
          } ring-blue-500 `}
        >
          <div
            className={` ${
              isActive && "bg-white"
            } group-hover:bg-white     rounded-full w-3 h-3  `}
          ></div>
        </div>
        <p
          className={` 
${
  isActive && "!text-white"
}   font-medium text-sm md:text-base group-hover:text-white   `}
        >
          {option.text}
        </p>
      </div>
    </motion.li>
  );
};

export default QuestionResponseOptionListItem;
