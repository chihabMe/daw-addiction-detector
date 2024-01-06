import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const links = [
  {
    text: "infos",
    link: "/dashboard/accounts/profile",
  },
  {
    text: "security",
    link: "/dashboard/accounts/profile/security",
  },
  {
    text: "notifications",
    link: "/dashboard/accounts/profile/notifications",
  },
  {
    text: "settings",
    link: "/dashboard/accounts/profile/settings",
  },
  {
    text: "delete account",
    link: "/dashboard/accounts/profile/delete-account",
  },
];

const ProfileLayout = () => {
  const pathname = useLocation().pathname;
  return (
    <main className="mx-2">
      <div className="bg-white   dark:bg-dark pt-12 px-4 w-full  rounded-sm flex min-h-[82vh]">
        <ul className="flex flex-col w-72 gap-y-3 py-6 px-2 ">
          {links.map(({ text, link }, idx) => (
            <motion.li
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * idx }}
              key={text}
              className="w-full "
            >
              <Link
                className={`${
                  pathname == link && "bg-blue-50     text-primary"
                } flex  hover:bg-blue-50  text-gray-500 rounded-md font-bold text-[18px] pl-4 py-3 hover:text-primary capitalize  transition-all  duration-300 cursor-pointer`}

                to={link}
              >
                {text}
              </Link>
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


export default ProfileLayout;
