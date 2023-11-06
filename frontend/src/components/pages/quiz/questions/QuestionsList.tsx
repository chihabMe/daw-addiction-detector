import { useFetch } from "../../../../hooks/useFetch";
import IQuestion from "../../../../interfaces/IQuestion";
import { getAllQuestionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import Loading from "../../../layout/Loading";
import QuestionListItem from "./QuestionListItem";

const QuestionsList = () => {
  const { data, error } = useFetch<IQuestion[]>(getAllQuestionsPath);
  if (error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  if (!data) return <Loading />;

  return (
    <ul className="flex flex-col gap-2 ">
      {data.map((question) => (
        <QuestionListItem key={question.id} question={question} />
      ))}
    </ul>
  );
};

export default QuestionsList;
