import { useQuery } from "react-query";
import SubmittedQuizItem from "./SubmittedQuizItem";
import { motion } from "framer-motion";
import { getAllSubmittedQuizzes } from "../../../../utils/services/quiz.services";
import Loading from "../../../layout/Loading";
const SubmittedQuizzesList = () => {
  const {
    isLoading,
    isError,
    error,
    data: submissions,
  } = useQuery("submitted-quizzes", getAllSubmittedQuizzes);
  if (isLoading) return <Loading />;
  if ((isError || !submissions?.data) && error instanceof Error) {
    return <span>{error.message}</span>;
  }
  return (
    <div className="max-w-screen-xl pt-10 flex justify-between  gap-2 ">
      <ul className="w-full  max-w-[800px]      gap-2 flex flex-col ">
        {submissions?.data.map((item, idx) => (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
          >
            <SubmittedQuizItem user={item.user} quizId={item.id} />
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default SubmittedQuizzesList;
