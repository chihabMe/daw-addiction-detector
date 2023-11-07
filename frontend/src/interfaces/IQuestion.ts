import IQuestionType from "./IQuestionType";

export default interface IQuestion {
  id: string;
  body: string;
  title: string;
  creator: IUser;
  type: IQuestionType;
  points: number;
  created: string; // Change this to the appropriate date type
  updated: string; // Change this to the appropriate date type
}
