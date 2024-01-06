import axiosClient from "../axios_client";
import {
  getAllSubmittedQuizzesPath,
  getSubmittedQuizDetailsPath,
} from "../constants";

interface ISubmittedQuiz {
  user: IUser;
  created_at: string;
  updated_at: string;
  id: string;
  reviewed:boolean;
}
export const getAllSubmittedQuizzes = () =>
  axiosClient.get<ISubmittedQuiz[]>(getAllSubmittedQuizzesPath);
export const getSubmittedQuizDetails = (id: string) => {
  const url = `${getSubmittedQuizDetailsPath}${id}`;
  return axiosClient.get(url);
};
