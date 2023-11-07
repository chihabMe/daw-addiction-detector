import QuestionResponseListItem from "./QuestionResponseListItem";

const QuestionResponsesListSkeleton = () => {
  return (
    <div className="flex flex-col gap-2">
      <QuestionResponseListItem />
      <QuestionResponseListItem />
      <QuestionResponseListItem />
      <QuestionResponseListItem />
    </div>
  );
};

export default QuestionResponsesListSkeleton;
