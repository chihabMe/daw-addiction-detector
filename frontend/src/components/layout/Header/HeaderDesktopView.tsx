import { NavLink, useLocation } from "react-router-dom";
import HeaderAuthUnAuthView from "./HeaderAuthUnAuthView";
import { motion } from "framer-motion";

interface Props {
  links: {
    href: string;
    text: string;
  }[];
}
const HeaderDesktopView = ({ links }: Props) => {
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
          <HeaderAuthUnAuthView />
    </div>
  );
};
export default HeaderDesktopView;
