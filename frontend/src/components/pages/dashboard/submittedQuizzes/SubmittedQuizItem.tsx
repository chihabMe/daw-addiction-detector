import { ClockIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

interface Props {
  quiz: { id: string };
  user: IUser;
}
const SubmittedQuizItem = (props: Props) => {
  const reviewed = Math.random() * 10 > 5;
  return (
    <li>
      <Link
        to={`/dashboard/submitted/${props.quiz.id}`}
        className={` ${
          reviewed ? "outline-red-300" : " outline-blue-400"
        } outline outline-1 cursor-pointer shadow w-full h-[70px] justify-between  rounded-lg p-4 flex items-center bg-light dark:bg-dark text-title-dark dark:text-light `}
      >
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={props.user.image} />
          <span className="capitalize">
            {props.user.first_name} {props.user.last_name}
          </span>
          <span className="">2024-1-10</span>
        </div>
        <div className="flex gap-2 items-center">
          {reviewed ? (
            <ClockIcon className="w-6 h-6 text-blue-400" />
          ) : (
            <CheckIcon className="w-5 h-5 text-blue-400" />
          )}
        </div>
      </Link>
    </li>
  );
};

export default SubmittedQuizItem;
