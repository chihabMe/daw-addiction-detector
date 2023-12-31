import { useState } from "react";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import QuestionResponseOptionListItem from "./QuestionResponseOptionListItem";
import QuestionResponsesListSkeleton from "./skeletons/QuestionResponsesListSkeleton";
import { useUiContext } from "../../../../hooks/useUiContext";
import { motion } from "framer-motion";
import { useQuery } from "react-query";
import { getQuestionRespones } from "../../../../utils/services/questions.services";
import { useQuiz } from "../../../../hooks/useQuiz";

interface Props {
  questionId: string;
}
const QuestionResponseOptionsList = ({ questionId }: Props) => {
  const { questionMode } = useUiContext();
  const {
    isLoading,
    isError,
    error,
    data: options,
  } = useQuery(
    `question_reponses_${questionId}`,
    getQuestionRespones.bind(null, questionId)
  );
  const { addAnswer } = useQuiz();
  const [chosedOption, setChosedOption] = useState("");
  const changeChosedResponse = (id: string) => {
    addAnswer(questionId, id);
    setChosedOption(id);
  };

  if (isLoading) return <QuestionResponsesListSkeleton />;
  if ((!options || isError) && error instanceof Error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  return (
    <ul
      className={`flex    ${
        questionMode == "grid"
          ? "grid grid-cols-1  md:grid-cols-2   "
          : "flex-col"
      }    py-4 gap-4 font-medium `}
    >
      {options?.data.map((option, idx) => (
        <motion.div layout>
          <QuestionResponseOptionListItem
            key={`quesiton_respones_item_${option.id}`}
            questionId={questionId}
            index={idx}
            setResponseOption={changeChosedResponse}
            chosedQuestionId={chosedOption}
            option={option}
          />
        </motion.div>
      ))}
    </ul>
  );
};

export default QuestionResponseOptionsList;
