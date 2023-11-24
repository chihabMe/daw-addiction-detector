import { NavLink, Link, useLocation } from "react-router-dom";
import Button from "../../ui/Button";
import DarkLightThemeToggler from "../DarkLightThemeToggler";
import { motion } from "framer-motion";
import { useAuth } from "../../../hooks/useAuth";
import { BellIcon, UserIcon } from "@heroicons/react/24/solid";

interface Props {
  links: {
    href: string;
    text: string;
  }[];
}
const HeaderDesktopView = ({ links }: Props) => {
  const { isLogged, user } = useAuth();
  const pathname = useLocation().pathname;
  return (
    <div className=" hidden   lg:flex items-center justify-between grow  ">
      <nav className="flex  grow ">
        <ul className="flex gap-4 items-center  ">
          {links.map((link, idx) => (
            <li
              key={idx}
              className="font-[600] font-inter py-3 px-6   text-[20px]   text-text-darker dark:text-text-ligther capitalize hover:text-primary  relative"
            >
              {pathname == link.href && (
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
                    ? "text-primary relative text-white z-10"
                    : "relative z-10"
                }
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      {isLogged && <AuthencatedUserHeaderView />}
      {!isLogged && <UnAuthencatedUserHeaderView />}
    </div>
  );
};
const AuthencatedUserHeaderView = () => {
  return (
    <div className="flex items-center gap-4">
      <Button className="bg-transparent px-4">
        <BellIcon className="w-5 h-5 text-gray-600" />
      </Button>
      <Button className="bg-transparent px-4">
        <Link to="/accounts/profile">
          <UserIcon className="w-5 h-5 text-gray-600" />
        </Link>
      </Button>
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
