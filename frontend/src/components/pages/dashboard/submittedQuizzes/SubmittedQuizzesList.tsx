import { useAuth } from "../../../../hooks/useAuth";
import Button from "../../../ui/Button";
import SubmittedQuizItem from "./SubmittedQuizItem";
import { motion } from "framer-motion";

const SubmittedQuizzesList = () => {
  return (
    <div className="max-w-screen-xl pt-10 flex justify-between  gap-2 ">
      <ul className="w-full  max-w-[800px]      gap-2 flex flex-col ">
        {submissions.map((item, idx) => (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: idx * 0.1, duration: 0.3 }}
          >
            <SubmittedQuizItem user={item.user} quiz={item.quiz} />
          </motion.div>
        ))}
      </ul>
    </div>
  );
};

export default SubmittedQuizzesList;
