import { useState } from "react";
import QuestionsList from "../components/pages/quiz/questions/QuestionsList";
import Button from "../components/ui/Button";
import { AnimatePresence, motion } from "framer-motion";
import BaseModal from "../components/ui/modals/BaseModal";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const QuizPage = () => {
  const [showQuestions,setShowQuestions]= useState(true)
  const  handleQuesiontsResponsesSubmit =() =>{
    setShowQuestions(false)
    toast.success("success")
    window.scroll({top:0})
  }

  return (
    <main className="min-h-screen">
      <section className="w-full max-w-screen-md  mx-auto py-6 px-2">
        <AnimatePresence>
          {showQuestions&&
          <motion.div
            key="questions_list"
            transition={{ delay: 0.1,duration:2 }}
            initial={{  opacity: 0}}
            animate={{ opacity: 1 }}
            exit={{opacity:0,transition:{delay:0,duration:1}}}
          >
            <QuestionsList />

        <motion.div key="questions_list_submit_form" className="flex gap-4 justify-between px-2 py-4 mt-4">
          <Button className=" w-full  bg-red-400 !rounded-md">reset</Button>
          <Button onClick={handleQuesiontsResponsesSubmit} className=" w-full       rounded-lg  !rounded-lg ">
            done
          </Button>
        </motion.div>

          </motion.div>
          }

        </AnimatePresence>
        {!showQuestions&&
        <BaseModal overlayClassName="bg-primary opacity-100"  showModal={showQuestions} closeModal={()=>setShowQuestions(false)} >
            <div className="w-full flex flex-col gap-2 max-w-[550px] ring-2 ring-blue-500 mx-auto bg-white rounded-lg p-4 ">
              <h1 className="text-lg font-bold text-black text-primary">
                Thanks !
              </h1>
              <p className="text-black  font-bold">
              your answer has been received you will receive the result in your email
              </p>
              <div className="flex w-full justify-end">
                <Link to="/">
                <Button className="rounded-xl">
                  done
                </Button>
                </Link>
              </div>
            </div>
        </BaseModal>
        }
      </section>
    </main>
  );
};

export default QuizPage;

