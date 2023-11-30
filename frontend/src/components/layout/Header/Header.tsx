import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import HeaderDesktopView from "./HeaderDesktopView";
import HeaderMobileView from "./HeadeMobileView";
import Container from "../Container";
import {  useState } from "react";
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

// const links2 = [
//   {
//     href: "/",
//     text: "home",
//   },
//
//   {
//     href: "/accounts/profile",
//     text: "profile",
//   },
//
//   {
//     href: "/accounts/settings",
//     text: "settings",
//   },
// ];
// const Header = () => {
//   const [isScrolling, setIsScrolling] = useState(false);
//   const prevYValue = useRef(0);
//   const handleScroll = () => {
//     if(window.innerWidth<=1024)return;
//     if (window.scrollY > prevYValue.current + 50) {
//       setIsScrolling(true);
//     } else if (window.scrollY < prevYValue.current - 50) {
//       setIsScrolling(false);
//     }
//     prevYValue.current = window.scrollY;
//   };
//   const handleResizing = ()=>{
//     setIsScrolling(false)
//   }
//   useEffect(() => {
//     if (window) {
//       window.addEventListener("scroll", handleScroll);
//       window.addEventListener("resize",handleResizing)
//       return () =>{
//         window.removeEventListener("resize",handleResizing)
//         window.removeEventListener("scroll", handleScroll)
//       }
//     }
//   }, []);
//   return (
//     <>
//       <AnimatePresence>{isScrolling && <ScrollingHeader />}</AnimatePresence>
//       <AnimatePresence>{!isScrolling && <DefaultHeader />}</AnimatePresence>
//     </>
//   );
// };

// const ScrollingHeader = () => {
//   const pathname = useLocation().pathname;
//   return (
//     <motion.header
//       initial={{ y: "-50%", opacity: 0, scale: 0.8 }}
//       animate={{ y: 0, opacity: 1, scale: 1 }}
//       exit={{ y: -100, opacity: 0, scale: 0.9 }}
//       transition={{ duration: 0.3 }}
//       className="w-full sticky top-4 z-50  "
//     >
//       <ul className="flex  relative   lg:gap-2 w-full mx-auto py-4 rounded-xl items-center justify-around px-4  max-w-[600px]     ">
//         <div className="  rounded-full z-40  absolute bg-gradient-to-r from-cyan-500 dark:from-cyan-800 dark:to-primary to-blue-500 top-0 bottom-0 left-0 right-0 " />
//         {links.map((link, idx) => (
//           <Link key={link.href} to={link.href}>
//             <motion.li
//               initial={{ y: -20 }}
//               animate={{ y: 0 }}
//               transition={{ delay: 0.1 * idx }}
//               className="  z-50 capitalize cursor-pointer px-3 py-1.5 text-xs lg:px-6 lg:py-3  font-medium relative "
//             >
//               {link.href == pathname && (
//                 <motion.div
//                   layoutId="mini_nav_item_background"
//                   className="bg-white rounded-full   absolute top-0 bottom-0 right-0 left-0"
//                 ></motion.div>
//               )}
//               <span
//                 className={`relative ${
//                   link.href == pathname && "!text-primary"
//                 } text-white hover:text-gray-200 `}
//               >
//                 {link.text}
//               </span>
//             </motion.li>
//           </Link>
//         ))}
//       </ul>
//     </motion.header>
//   );
// };
//
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
