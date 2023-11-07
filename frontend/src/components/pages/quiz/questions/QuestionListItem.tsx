import IQuestion from "../../../../interfaces/IQuestion";
import QuestionResponseOptionsList from "../responses/QuestionResponseOptionsList";

interface Props {
  question: IQuestion;
  index: number;
}
const QuestionListItem = ({ question, index }: Props) => {
  return (
    <div className="flex flex-col   gap-2  rounded-lg p-2">
      <div className="py-4 flex gap-2 items-center">
        <p className=" text-gray-800 text-lg font-bold "> {index} : {question.body}</p>
      </div>
      <QuestionResponseOptionsList questionId={question.id} />
    </div>
  );
};

export default QuestionListItem;
