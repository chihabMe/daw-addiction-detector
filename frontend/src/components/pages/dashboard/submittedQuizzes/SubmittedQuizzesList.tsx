import { useAuth } from "../../../../hooks/useAuth";
import SubmittedQuizItem from "./SubmittedQuizItem";
import { motion } from "framer-motion";

const SubmittedQuizzesList = () => {
  const { user } = useAuth();
  if (!user) return <span>error</span>;
  const submissions: { user: IUser; quiz: { id: string } }[] = [
    {
      user,
      quiz: { id: "hisd" },
    },
    {
      user,
      quiz: { id: "hisd" },
    },
    {
      user,
      quiz: { id: "hisd" },
    },
    {
      user,
      quiz: { id: "hisd" },
    },
    {
      user,
      quiz: { id: "hisd" },
    },
  ];
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
      <div className="bg-blue-50 rounded-lg max-w-[280px] flex-[20%]">
        <h1>Filters</h1>
      </div>
    </div>
  );
};

export default SubmittedQuizzesList;
