import { QueueListIcon, TableCellsIcon } from "@heroicons/react/24/solid";
import { useFetch } from "../../../../hooks/useFetch";
import IQuestion from "../../../../interfaces/IQuestion";
import { getAllQuestionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import QuestionListItem from "./QuestionListItem";
import QuestionsListSkeleton from "./skeletons/QuestionsListSkeleton";
import { motion } from "framer-motion";
import { useUiContext } from "../../../../hooks/useUiContext";
import Button from "../../../ui/Button";

const QuestionsList = () => {
  const { data, error } = useFetch<IQuestion[]>(getAllQuestionsPath);
  const {questionDisplayType,toggleQuestionsDisplaytype,changeQuestionModeToGrid,changeQuestionModeToList,questionMode} =  useUiContext();
  if (error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  if (!data) return <QuestionsListSkeleton />;

  return (
    <>
    <div className="flex  gap-2 py-4 justify-end px-2">

        <Button onClick={toggleQuestionsDisplaytype} className={`${` px-6 py-2  text-text-dark dark:text-text-light  ${questionDisplayType=="letters"&&"!text-blue-600 !bg-blue-200"} p-2 rounded-md cursor-pointer   bg-transparent`} p-2 rounded-md  cursor-pointer `}  >
          A-z
        </Button>

        <Button onClick={changeQuestionModeToList} className={` px-6 py-2  text-text-dark dark:text-text-light  ${questionMode=="list"&&"!text-blue-600 !bg-blue-200"} p-2 rounded-md cursor-pointer   bg-transparent`}>
          <QueueListIcon className="w-5 h-5"/>
        </Button>
        <Button onClick={changeQuestionModeToGrid} className={`${` px-6 py-2  text-text-dark dark:text-text-light  ${questionMode=="grid"&&"!text-blue-600 !bg-blue-200"} p-2 rounded-md cursor-pointer   bg-transparent`} p-2 rounded-md  cursor-pointer `}  >
          <TableCellsIcon className="w-5 h-5"/>
        </Button>
    </div>
    <ul className="flex flex-col gap-2 ">
      {data.map((question, idx) => (
        <motion.div
          transition={{ delay: 0.1 * idx }}
          initial={{ opacity: 0.1, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="flex flex-col   gap-2  rounded-lg p-2"
        >
          <QuestionListItem key={question.id} index={idx} question={question} />
        </motion.div>
      ))}



    </ul>

    </>
  );
};

export default QuestionsList;
