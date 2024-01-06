import { useAuth } from "../../../../hooks/useAuth";
import SubmittedQuizItem from "./SubmittedQuizItem";

const SubmittedQuizzesList = () => {
  const { user } = useAuth();
  if (!user) return <span>error</span>;
  return (
    <div className="max-w-screen-xl pt-10 flex justify-between  gap-2 ">
      <ul className="w-full  max-w-[800px]      gap-2 flex flex-col ">
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
        <SubmittedQuizItem user={user} quiz={{id:"hi"}} />
      </ul>
      <div className="bg-blue-50 rounded-lg max-w-[280px] flex-[20%]">
        <h1>Filters</h1>
      </div>
    </div>
  );
};

export default SubmittedQuizzesList;
