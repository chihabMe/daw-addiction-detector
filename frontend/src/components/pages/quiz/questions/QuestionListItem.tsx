import { ChevronDownIcon } from "@heroicons/react/20/solid";
import IQuestion from "../../../../interfaces/IQuestion";
import QuestionResponseOptionsList from "../responses/QuestionResponseOptionsList";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  question: IQuestion;
  index: number;
}
const QuestionListItem = ({ question, index }: Props) => {

  const [showQuestionBody, setShowQuestionBody] = useState(false);

  const toggleQuestionBody = () => setShowQuestionBody((prev) => !prev);

  return (
    <li >
      <div
        className="py-2 flex  items-center cursor-pointer justify-between items-center"
        onClick={toggleQuestionBody}
      >
        <p className=" text-text-darker dark:text-text-ligther  text-lg md:text-xl font-bold ">
          {question.title}
        </p>
        <div>
          <ChevronDownIcon
            className={` ${
              showQuestionBody && "rotate-180"
            } transition-all duration-200 w-6 h-6 text-text-dark dark:text-text-light`}
          />
        </div>
      </div>
      <AnimatePresence>
        {showQuestionBody && (
          <motion.div
            key={`quiestion_body_${index}`}
            transition={{ delay: 0.1,duration:0.2}}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10}}
            className=" text-text-dark dark:text-text-light py-2 md:py-4 text-sm font-bold "
          >
            <p>{question.body}</p>
          </motion.div>
        )}
      </AnimatePresence>
      <QuestionResponseOptionsList questionId={question.id} />
    </li>
  );
};

export default QuestionListItem;
