import {
  BellIcon,
  CheckCircleIcon,
  FaceSmileIcon,
  HashtagIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";
const sidebarItems = [
  {
    link: "/accounts/dashboard",
    text: "dashboard",
    Icon: HomeIcon,
  },

  {
    link: "/accounts/profile",
    text: "proifle",
    Icon: UserIcon,
  },

  {
    link: "/accounts/quiz/submited",
    text: "submited",
    Icon: CheckCircleIcon,
  },

  {
    link: "/accounts/quiz/list",
    text: "quizzes",
    Icon: QueueListIcon,
  },

  {
    link: "/accounts/patients",
    text: "patients",
    Icon: FaceSmileIcon,
  },

  {
    link: "/accounts/profile/notifications",
    text: "notifications",
    Icon: BellIcon,
  },
];
const SideBar = () => {
  return (
    <aside className="bg-white h-screen w-64 shadow-lg">
      <div className=" pl-4 py-6">
        <Link to="/" className="text-text-darker dark:text-text-ligther ">
          <h1 className="capitalize font-bold  text-3xl">
            mz<span className="text-primary">tool</span>
          </h1>
        </Link>
      </div>
      <ul className="flex flex-col px-2 gap-1">
        {sidebarItems.map((item, idx) => (
          <SidBarItem
            key={`sidebar_item_${idx}`}
            Icon={item.Icon}
            text={item.text}
            link={item.link}
          />
        ))}
      </ul>
    </aside>
  );
};
const SidBarItem = ({
  text,
  link,
  Icon,
}: {
  text: string;
  link: string;
  Icon: typeof HashtagIcon;
}) => {
  const pathname = useLocation().pathname;
  const isActive = pathname == link;
  return (
    <li
      className={`py-3 px-2 transition-all duration-300 cursor-pointer ${
        isActive && "bg-primary"
      }  rounded hover:bg-primary group `}
    >
      <Link to={link} className="w-full bg-green-200">
        <div className="flex items-center gap-4">
          <div>
            <Icon
              className={`w-5 h-5 transition-all duration-300 t text-gray-500 ${
                isActive && "!text-white"
              }  group-hover:text-white`}
            />
          </div>
          <span
            className={`capitalize transition-all duration-300 text-gray-600  ${
              isActive && "!text-white"
            } dark:text-text-lighter group-hover:text-white font-medium`}
          >
            {text}
          </span>
        </div>
      </Link>
    </li>
  );
};

export default SideBar;
