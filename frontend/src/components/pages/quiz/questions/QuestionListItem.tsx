import { ChevronDownIcon } from "@heroicons/react/20/solid";
import IQuestion from "../../../../interfaces/IQuestion";
import QuestionResponseOptionsList from "../responses/QuestionResponseOptionsList";
import { useState } from "react";

interface Props {
  question: IQuestion;
  index: number;
}
const QuestionListItem = ({ question, index }: Props) => {
  const [showQuestionBody, setShowQuestionBody] = useState(false);
  const toggleQuestionBody = () => setShowQuestionBody((prev) => !prev);
  return (
    <div className="flex flex-col   gap-2  rounded-lg p-2">
      <div
        className="py-4 flex gap-2 items-center cursor-pointer justify-between items-center"
        onClick={toggleQuestionBody}
      >
        <p className=" text-gray-800 text-lg font-bold ">
          {index} : {question.title}
        </p>
        <div>
          <ChevronDownIcon
            className={` ${
              showQuestionBody && "rotate-180"
            } transition-all duration-200 w-6 h-6 text-gray-500`}
          />
        </div>
      </div>
      {showQuestionBody && (
        <div className=" text-gray-600 py-4 text-sm font-bold ">
          <p>{question.body}</p>
        </div>
      )}
      <QuestionResponseOptionsList questionId={question.id} />
    </div>
  );
};

export default QuestionListItem;