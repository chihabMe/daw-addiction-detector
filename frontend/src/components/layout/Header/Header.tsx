import { Link  } from "react-router-dom";
import { motion } from "framer-motion";
import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeadeMobileView";
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
  return (
    <motion.header
      initial={{opacity:0,y:"-50%"}}
      animate={{opacity:1,y:0}}
      transition={{delay:0.1,duration:0.2}}
      className="w-full w-full max-w-[1500px]  mx-auto my-4 px-4 px-4 py-4 md:px-8 rounded-lg overflow-hidden items-center    relative  ">

        <div className=" dark:bg-gray-600 blur-[100px] -z-10 absolute top-0 bottom-0 left-0 right-0" />
      <div className=" flex items-center gap-16 justify-between py-4   mx-auto  ">
        <Link to="/" className="text-text-darker dark:text-text-ligther ">
          <h1 className="capitalize font-bold  text-3xl">
            mz<span className="text-primary">tol</span>
          </h1>
        </Link>
      <HeaderDesktopView links={links}/>
      <HeaderMobileView links={links}/>
      </div>
    </motion.header>
  );
};



export default Header;
