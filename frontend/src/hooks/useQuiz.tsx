import { useContext } from "react";
import { quizContext } from "../context/quiz.context";

export const useQuiz = () => useContext(quizContext);
