import { QueueListIcon, TableCellsIcon } from "@heroicons/react/20/solid";
import { useFetch } from "../../../../hooks/useFetch";
import IQuestion from "../../../../interfaces/IQuestion";
import { getAllQuestionsPath } from "../../../../utils/constants";
import ErrorPageContainer from "../../../layout/ErrorPageContainer";
import QuestionListItem from "./QuestionListItem";
import QuestionsListSkeleton from "./skeletons/QuestionsListSkeleton";
import { motion } from "framer-motion";
import { useUiContext } from "../../../../hooks/useUiContext";

const QuestionsList = () => {
  const { data, error } = useFetch<IQuestion[]>(getAllQuestionsPath);
  const {changeQuestionModeToGrid,changeQuestionModeToList,questionMode} =  useUiContext();
  if (error)
    return (
      <ErrorPageContainer>
        <p>{error.message}</p>
      </ErrorPageContainer>
    );
  if (!data) return <QuestionsListSkeleton />;

  return (
    <>
    <div className="flex text-gray-900 gap-2 py-4 justify-end px-2">
        <div onClick={changeQuestionModeToList} className={`${questionMode=="list"&&"text-blue-500 bg-blue-100"} p-2 rounded-md cursor-pointer`}>
          <QueueListIcon className="w-5 h-5"/>
        </div>
        <div onClick={changeQuestionModeToGrid} className={`${questionMode=="grid"&&"text-blue-500 bg-blue-100"} p-2 rounded-md  cursor-pointer `}  >
          <TableCellsIcon className="w-5 h-5"/>
        </div>
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
