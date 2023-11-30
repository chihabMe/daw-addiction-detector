import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeadeMobileView";
import Container from "../Container";
import { useState } from "react";
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
    href: "/contact",
    text: "contact",
  },
];

const Header = () => {
  const [isScrolling, setIsScolling] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (value) => {
    if (value > scrollY.getPrevious() && value > 250) {
      console.log("yes");
      setIsScolling(true);
    } else {
      setIsScolling(false);
      console.log("no");
    }
  });
  return (
    <motion.header
      animate={isScrolling ? "hidden" : "visible"}
      variants={{
        hidden: {
          opacity: 0.4,
          y: "-100%",
        },
        visible: {
          opacity: 1,
          y: 0,
        },
      }}
      transition={{ delay: 0.1, duration: 0.4 }}
      className="w-full sticky top-0 relative z-50 bg-light dark:bg-dark w-full     md:mx-auto  px-4 px-4 py-2 md:px-8 rounded-lg overflow-hidden items-center    relative  "
    >
      <Container>
        <div className="  blur-[100px] -z-10 absolute top-0 bottom-0 left-0 right-0" />
        <div className=" flex items-center gap-16 justify-between py-4   mx-auto  ">
          <Link to="/" className="text-text-darker dark:text-text-ligther ">
            <h1 className="capitalize font-bold  text-3xl">
              mz<span className="text-primary">tool</span>
            </h1>
          </Link>
          <HeaderDesktopView links={links} />
          <HeaderMobileView links={links} />
        </div>
      </Container>
    </motion.header>
  );
};

export default Header;
