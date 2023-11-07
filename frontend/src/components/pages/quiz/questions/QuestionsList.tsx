import { useFetch } from "../../../../hooks/useFetch";
import IQuestion from "../../../../interfaces/IQuestion";
import { getAllQuestionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import QuestionListItem from "./QuestionListItem";
import QuestionsListSkeleton from "./skeletons/QuestionsListSkeleton";

const QuestionsList = () => {
  const { data, error } = useFetch<IQuestion[]>(getAllQuestionsPath);
  if (error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  if (!data) return <QuestionsListSkeleton />;

  return (
    <ul className="flex flex-col gap-2 ">
      {data.map((question, idx) => (
        <QuestionListItem
          key={question.id}
          index={idx + 1}
          question={question}
        />
      ))}
    </ul>
  );
};

export default QuestionsList;
