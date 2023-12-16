import {
  BellIcon,
  CheckCircleIcon,
  FaceSmileIcon,
  HashtagIcon,
  HomeIcon,
  QueueListIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { AnimatePresence, motion, useAnimation } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useUiContext } from "../../../hooks/useUiContext";
import Button from "../../ui/Button";
import { Bars3Icon,ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useEffect, useRef } from "react";
const sidebarItems = [
  {
    link: "/",
    text: "home",
    Icon: HomeIcon,
  },
  {
    link: "/accounts/dashboard",
    text: "dashboard",
    Icon: HashtagIcon,
  },

  {
    link: "/accounts/profile",
    text: "profile",
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
  const { showDashBoardSideBar, toggleDashBoardSideBarFunc } = useUiContext();
  const ref = useRef(null);
  const animate = useAnimation();
  useEffect(() => {
    if (showDashBoardSideBar) animate.start("show");
    else {
      animate.start("hide");
    }
  }, [showDashBoardSideBar]);
  return (
    <motion.div layout ref={ref} transition={{ duration: 2 }}>
      <motion.aside
        initial={"hide"}
        animate={animate}
        transition={{ ease: "easeInOut" }}
        variants={{
          hide: { width: 90 },
          show: { width: 300 },
        }}
        className=" top-0 sticky bg-light relative dark:bg-dark h-screen  shadow-lg"
      >
        <div
          className={`absolute top-5  ${
            showDashBoardSideBar ? "right-2" : "left-1/2 -translate-x-1/2"
          } `}
        >
          <Button
            className="bg-tranparent px-4 py-2 "
            onClick={toggleDashBoardSideBarFunc}
          >
            {showDashBoardSideBar ?
            <ArrowLeftIcon className="w-6 h-6 text-gray-400" />
              :
            <Bars3Icon className="w-6 h-6 text-gray-400" />
            }
          </Button>
        </div>
        <div className=" pl-4 py-6 h-24">
          {showDashBoardSideBar && (
            <AnimatePresence>
              <motion.div
                exit={{ opacity: 0 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2}}
              >
                <Link
                  to="/"
                  className="text-text-darker dark:text-text-ligther "
                >
                  <h1 className="capitalize font-bold  text-3xl">
                    mz<span className="text-primary">tool</span>
                  </h1>
                </Link>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
        <ul className="flex flex-col px-2 gap-1 ">
          {sidebarItems.map((item, idx) => (
            <SidBarItem
              key={`sidebar_item_${idx}`}
              Icon={item.Icon}
              text={item.text}
              link={item.link}
            />
          ))}
        </ul>
      </motion.aside>
    </motion.div>
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
  const { showDashBoardSideBar } = useUiContext();
  const pathname = useLocation().pathname;
  const isActive =
    pathname == link || (link != "/" && pathname.startsWith(link));
  return (
    <li
      className={`py-3.5 mt-1 px-2 transition-all duration-300 cursor-pointer ${
        isActive && "bg-primary"
      }  rounded hover:bg-primary group `}
    >
      <Link to={link} className="w-full bg-green-200">
        <div className="flex items-center gap-4">
          <div className="w-10 flex items-center justify-center">
            <Icon
              className={`w-5 h-5 transition-all duration-300 t text-gray-500 dark:text-gray-100 ${
                isActive && "!text-white"
              }  group-hover:text-white`}
            />
          </div>
          {showDashBoardSideBar && (
            <AnimatePresence>
              <motion.span
                exit={{ opacity: 0, width: 400, backgroundColor: "gren" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25 }}
                className={`capitalize  transition-all duration-300 text-gray-600  dark:text-gray-100 ${
                  isActive && "!text-white"
                } dark:text-text-lighter group-hover:text-white font-medium`}
              >
                {text}
              </motion.span>
            </AnimatePresence>
          )}
        </div>
      </Link>
    </li>
  );
};

export default SideBar;
