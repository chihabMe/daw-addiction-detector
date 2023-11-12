import { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";
import { getAllQuestionResponseOptionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import QuestionResponseOptionListItem from "./QuestionResponseOptionListItem";
import QuestionResponsesListSkeleton from "./skeletons/QuestionResponsesListSkeleton";
import { useUiContext } from "../../../../hooks/useUiContext";
import { motion } from "framer-motion";

interface Props {
  questionId: string;
}
const QuestionResponseOptionsList = ({ questionId }: Props) => {
  const {questionMode} = useUiContext();
  const { data: questionOptions, error } = useFetch<IQuestionResponseOption[]>(
    `${getAllQuestionResponseOptionsPath}${questionId}`,
  );
  const [chosedOption, setChosedOption] = useState("");
  const changeChosedResponse = (id: string) => {
    setChosedOption(id);
  };

  if (error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  if (!questionOptions) return <QuestionResponsesListSkeleton />;
  return (
    <ul className={ `flex transition-all duration-500  ${questionMode=="grid" ?"grid grid-cols-1  md:grid-cols-2   ":"flex-col" }    py-4 gap-4 font-medium ` }>
      {questionOptions.map((option,idx) => (
        
        <QuestionResponseOptionListItem
          index={idx}
          setResponseOption={changeChosedResponse}
          chosedQuestionId={chosedOption}
          key={option.id}
          option={option}
        />
      ))}
    </ul>
  );
};

export default QuestionResponseOptionsList;
