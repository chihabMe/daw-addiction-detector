import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import DarkLightThemeToggler from "../DarkLightThemeToggler";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "../../../hooks/useAuth";
import HeaderProfileDropMenu from "./HeaderProfileDropMenu";
import HeaderNotificationsMenu from "./HeaderNotificationsMenu";
import HeaderMessagesMenu from "./HeaderMessagesMenu";

interface Props {
  links: {
    href: string;
    text: string;
  }[];
}
const HeaderDesktopView = ({ links }: Props) => {
  const { isLogged, isLoading } = useAuth();
  const pathname = useLocation().pathname;
  return (
    <div className=" hidden   lg:flex items-center justify-between grow  ">
      <nav className="flex  grow ">
        <ul className="flex gap-4 items-center">
          {links.map((link, idx) => (
            <li
              key={`nav_bar_links_item_${idx}`}
              className="font-[500]   py-3 px-6  text-text-darker dark:text-text-ligther capitalize hover:text-primary relative"
            >
              {pathname === link.href && (
                <motion.div
                  layout
                  layoutId="active-navlink"
                  style={{ borderRadius: 9999 }}
                  className="w-full rounded-full inset-0 bg-primary absolute"
                ></motion.div>
              )}
              <NavLink
                to={link.href}
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? "text-primary transition-all  relative text-white z-10"
                    : "relative z-10"
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <AnimatePresence>
        {isLogged && (
          <motion.div
            transition={{ delay: 0.2, duration: 0.2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AuthencatedUserHeaderView />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && !isLogged && (
          <motion.div
            transition={{ delay: 0.1, duration: 0.2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <UnAuthencatedUserHeaderView />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
const AuthencatedUserHeaderView = () => {
  return (
    <div className="flex items-center ">
      <DarkLightThemeToggler />
      <HeaderMessagesMenu />
      <HeaderNotificationsMenu />
      <HeaderProfileDropMenu />
    </div>
  );
};
const UnAuthencatedUserHeaderView = () => {
  return (
    <div className="flex gap-4 items-center">
      <DarkLightThemeToggler />
      <Link to="/accounts/login">
        <Button className="rounded-xl px-8 py-3.5 bg-transparent text-gray-700 dark:text-text-ligther hover:text-primary  capitalize  hover:ring-2  hover:ring-primary-500">
          log in
        </Button>
      </Link>

      <Link to="/accounts/signup">
        <Button className="rounded-xl px-8 py-3.5  capitalize  ring-2 ring-blue-500">
          sign up
        </Button>
      </Link>
    </div>
  );
};
export default HeaderDesktopView;
