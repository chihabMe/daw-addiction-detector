import { ClockIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

interface Props {
  quizId: string;
  user: IUser;
  reviewed: boolean;
  createdAt: string;
}
const SubmittedQuizItem = (props: Props) => {
  return (
    <li>
      <Link
        to={`/dashboard/submitted/${props.quizId}`}
        className={` ${
          props.reviewed ? "outline-blue-400" : "  outline-red-300"
        } outline outline-1 cursor-pointer shadow w-full h-[70px] justify-between  rounded-lg p-4 flex items-center bg-light dark:bg-dark text-title-dark dark:text-light `}
      >
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full" src={props.user.image} />
          <span className="capitalize">
            {props.user.first_name} {props.user.last_name}
          </span>

          <span className="capitalize">{props.user.email}</span>
          <span className="">{props.createdAt}</span>
        </div>
        <div className="flex gap-2 items-center">
          {props.reviewed ? (
            <CheckIcon className="w-6 h-6 text-blue-400" />
          ) : (
            <ClockIcon className="w-5 h-5 text-blue-400" />
          )}
        </div>
      </Link>
    </li>
  );
};

export default SubmittedQuizItem;
