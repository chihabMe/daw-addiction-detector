export default interface IQuestionType {
  id:string;
  description: string;
  creator: User;
  title: string;
  created: string; // Change this to the appropriate date type
  updated: string; // Change this to the appropriate date type
}
