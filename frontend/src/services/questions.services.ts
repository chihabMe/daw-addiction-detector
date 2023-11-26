import IQuestion from "../interfaces/IQuestion";
import IQuestionResponseOption from "../interfaces/IQuestionResponseOption";
import axiosClient from "../utils/axios_client";
import {
  getAllQuestionResponseOptionsPath,
  getAllQuestionsPath,
} from "../utils/constants";

export const getAllQuestions = () =>
  axiosClient.get<IQuestion[]>(getAllQuestionsPath);

export const getQuestionRespones = (questionId: string) =>
  axiosClient.get<IQuestionResponseOption[]>(
    `${getAllQuestionResponseOptionsPath}${questionId}`,
  );
