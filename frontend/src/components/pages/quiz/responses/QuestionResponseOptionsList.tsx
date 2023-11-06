import { useState } from "react";
import { useFetch } from "../../../../hooks/useFetch";
import IQuestionResponseOption from "../../../../interfaces/IQuestionResponseOption";
import { getAllQuestionResponseOptionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import Loading from "../../../layout/Loading";
import QuestionResponseOptionListItem from "./QuestionResponseOptionListItem";

interface Props {
  questionId: string;
}
const QuestionResponseOptionsList = ({ questionId }: Props) => {
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
  if (!questionOptions) return <Loading />;
  return (
    <ul className="flex flex-col  gap-4 font-medium ">
      {questionOptions.map((option) => (
        <QuestionResponseOptionListItem
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
