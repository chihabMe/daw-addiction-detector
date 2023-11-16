import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeadeMobileView";
import { useEffect, useState } from "react";
const links = [
  {
    href: "/",
    text: "home",
  },

  {
    href: "/about",
    text: "about us",
  },

  {
    href: "/services",
    text: "services",
  },

  {
    href: "/contact",
    text: "contact",
  },
];

const Header = () => {
  const [isScrolling, setIsScrolling] = useState(false);
  const handleScroll = () => {
    console.log("y:", window.scrollY);
    console.log("height:", window.innerHeight);

    if (window.scrollY >= window.innerHeight - 200) {
      setIsScrolling(true);
    } else {
      setIsScrolling(false);
    }
  };
  useEffect(() => {
    if (window) {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);
  console.log(isScrolling);
  return (
    <AnimatePresence >
      {isScrolling ? <ScrollingHeader /> : <DefaultHeader />}
    </AnimatePresence>
  );
};
const ScrollingHeader = () => {
  const pathname = useLocation().pathname;
  return (
    <motion.header
      initial={{ y: "-50%", opacity: 0,scale:0.8 }}
      animate={{ y: 0, opacity: 1,scale:1 }}
      exit={{ y: "-50%", opacity: 0,scale:0 ,transition:{duration:0.5}}}

      transition={{duration:0.2}}
      className="w-full sticky top-4 z-50  "
    >
      <ul className="flex  relative   gap-2 w-full mx-auto py-4 rounded-xl items-center justify-around px-4  max-w-[600px]     ">
        <div className="  rounded-full z-40  absolute bg-gradient-to-r from-cyan-500 to-blue-500 top-0 bottom-0 left-0 right-0 " />
        {links.map((link) => (
          <Link to={link.href}>
            <li className="  z-50 capitalize cursor-pointer px-6 py-3  font-medium relative ">
              {link.href == pathname && (
                <motion.div
                  layoutId="mini_nav_item_background"
                  className="bg-white rounded-full   absolute top-0 bottom-0 right-0 left-0"
                ></motion.div>
              )}
              <span className={ `relative ${link.href==pathname&&"!text-primary"} text-white hover:text-gray-200 ` }>{link.text}</span>
            </li>
          </Link>
        ))}
      </ul>
    </motion.header>
  );
};

const DefaultHeader = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: "-50%" }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.2 }}
      className="w-full sticky top-0 relative z-50 bg-light dark:bg-dark w-full max-w-[1500px]    md:mx-auto my-4 px-4 px-4 py-2 md:px-8 rounded-lg overflow-hidden items-center    relative  "
    >
      <div className=" dark:bg-gray-600 blur-[100px] -z-10 absolute top-0 bottom-0 left-0 right-0" />
      <div className=" flex items-center gap-16 justify-between py-4   mx-auto  ">
        <Link to="/" className="text-text-darker dark:text-text-ligther ">
          <h1 className="capitalize font-bold  text-3xl">
            mz<span className="text-primary">tol</span>
          </h1>
        </Link>
        <HeaderDesktopView links={links} />
        <HeaderMobileView links={links} />
      </div>
    </motion.header>
  );
};

export default Header;
