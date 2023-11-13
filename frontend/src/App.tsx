import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.tsx";
import { AnimatePresence, motion } from "framer-motion";
import { useUiContext } from "./hooks/useUiContext.ts";
function App() {
  const { theme } = useUiContext();
  return (
    <>
      <AnimatePresence>
        {theme=="dark" && (
          <motion.div
            key="dark_theme_overlay"
            transition={{delay:0.1}}
            initial={{top:0,right:0,opacity:0,radius:"100%"}}
            exit={{top:0,right:0,opacity:0,radius:"100%"}}
            animate={{top:0,right:0,bottom:0,left:0,opacity:1,radius:0}}
            className="-z-10 fixed      bg-light  dark:bg-dark"></motion.div>
        )}
      </AnimatePresence>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
