import { ReactNode, createContext, useEffect, useState } from "react";

interface QuizContextType {
  answers: {
    questionId: string;
    responseId: string;
  }[];
  addAnswer: (questionId: string, responseId: string) => void;
}
const initialState: QuizContextType = {
  answers: [],
  addAnswer: (questionId, responseId) => {},
};

export const quizContext = createContext(initialState);
export const QuizContextProvider = ({ children }: { children: ReactNode }) => {
  const [answers, setAnswers] = useState(initialState.answers);
  const addAnswer = (questionId: string, responseId: string) => {
    setAnswers((prev) => {
      const newAnswers = prev.map((item) => {
        if (item.questionId == questionId) return { questionId, responseId };
        return item;
      });
      if (newAnswers.length == prev.length&&prev.length!=0) return newAnswers;

      return [...prev, { questionId, responseId }];
    });
  };
  const value: QuizContextType = {
    answers,
    addAnswer,
  };
  useEffect(() => {
    console.log(answers);
  }, [answers]);

  return <quizContext.Provider value={value}>{children}</quizContext.Provider>;
};
