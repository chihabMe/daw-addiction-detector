import IQuestion from "./IQuestion";

export default interface IQuestionResponseOption {
  id: string;
  text: string;
  question: IQuestion;
  created: string; // Change this to the appropriate date type
  updated: string; // Change this to the appropriate date type
}
