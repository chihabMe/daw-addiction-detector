import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    text: "infos",
    link: "/accounts/profile",
  },
  {
    text: "security",
    link: "/accounts/profile/security",
  },
  {
    text: "notifications",
    link: "/accounts/proifle/notifications",
  },
  {
    text: "settings",
    link: "/accounts/profile/settings",
  },
  {
    text: "delete account",
    link: "/accounts/proifle/delete-account",
  },
];

const ProfileLayout = () => {
  const pathname = useLocation().pathname;
  return (
    <main className="">
      <div className="bg-white dark:bg-dark pt-12 px-4 w-full rounded-sm flex min-h-[82vh]">
        <ul className="flex flex-col w-72 gap-1 py-6 px-2 ">
          {links.map(({ text, link }, idx) => (
            <motion.li
              initial={{  opacity: 0}}
              animate={{  opacity: 1}}
              transition={{ delay: 0.1 * idx }}
              className={`${
                pathname == link && "bg-blue-50 w-full   text-primary"
              }   hover:bg-blue-50  text-gray-500 rounded-md font-medium px-2 py-2 hover:text-primary capitalize transition-all  duration-300 cursor-pointer`}
              key={text}
            >
              <ProfileLayoutListItem text={text} to={link} />
            </motion.li>
          ))}
        </ul>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const ProfileLayoutListItem = ({ text, to }: { text: string; to: string }) => {
  return (
    <Link className="" to={to}>
      {text}
    </Link>
  );
};

export default ProfileLayout;
