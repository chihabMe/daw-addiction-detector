import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { Link, useParams } from "react-router-dom";
import Button from "../../../components/ui/Button";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
interface SubmittedItem {
  quiz: string;
  response: string;
}
const submissions: SubmittedItem[] = [
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
  {
    quiz: "how many hours do you play",
    response: "4 hours a day",
  },
];
const SubmittedQuizDetails = () => {
  const { submissionId } = useParams();
  return (
    <main className="min-h-screen">
      <section>
        <Link to={"/dashboard/submitted"}>
          <Button className="px-4 py-2 ">
            <ArrowLeftIcon className="w-4 h-4 text-white" />
          </Button>
        </Link>
      </section>
      <section className="pt-10 flex justify-between w-full max-w-screen-xl">
        <div className=" w-full max-w-screen-sm">
          <ul className="flex flex-col px-4 gap-4 h-[800px] overflow-y-scroll scroll-hide">
            {submissions.map((item, idx) => (
              <AnimatePresence>
                <motion.div
                  initial={{ y: -40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                >
                  <SubmittedQuizItem
                    quiz={item.quiz}
                    response={item.response}
                  />
                </motion.div>
              </AnimatePresence>
            ))}
          </ul>
        </div>
        <div className=" rounded-lg max-w-[450px] flex-[30%]">
          <div className="flex flex-col gap-2">
            <input
              className="flex justify-between   focus:outline-primary focus:outline focus:outline-1   h-[52px] px-4 rounded-md outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium"
              placeholder="addiction level"
            />

            <input
              className="flex justify-between focus:outline-primary focus:outline focus:outline-1  h-[52px] px-4 rounded-md outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium"
              placeholder="depression score"
            />

            <input
              className="flex focus:outline-primary focus:outline focus:outline-1  justify-between h-[52px] px-4 rounded-md outline-none bg-white dark:bg-gray-700 w-full text-text-darker dark:text-text-ligther font-medium"
              placeholder="anxiety level"
            />
            <textarea
              placeholder="Note"
              className="w-full  outline-primary focus:outline outline-1 rounded-lg p-2 h-40 resize-none rounded-md"
            />
            <Button className="w-full mt-6">review</Button>
          </div>
        </div>
      </section>
    </main>
  );
};
const SubmittedQuizItem = (props: SubmittedItem) => {
  return (
    <li className="flex flex-col gap-3">
      <span className="rounded-lg p-4 bg-light dark:bg-dark ">
        {props.quiz}
      </span>
      <span className="rounded-lg p-4 bg-blue-400 text-white flex gap-2 items-center">
        <div
          className={` 
               group-hover:bg-white bg-white group-active:animate-ping    rounded-full w-3 h-3  `}
        ></div>
        {props.response}
      </span>
    </li>
  );
};

export default SubmittedQuizDetails;
