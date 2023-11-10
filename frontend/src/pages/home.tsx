import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const HomePage = () => (
  <main className="min-h-screen px-4">
    <motion.section
          transition={{delay:0.1,duration:0.4}}
          initial={{y:-50,opacity:0}}
          animate={{y:0,opacity:1}}

      className="flex flex-col py-8 md:flex-row justify-between items-center justify-center min-h-[80vh] max-w-[1400px] mx-auto">
      <div className="w-full lg:w-1/2 font-roboto max-w-[680px] gap-4  flex flex-col justify-center lg:items-start">
        <div>
        <motion.h1
            // transition={{delay:0.1}}
            // initial={{x:"-100%",y:-100,opacity:0}}
            // animate={{x:0,opacity:1,y:0}}

            className="text-4xl lg:text-5xl text-gray-800 font-[800] capitalize mb-4">
          Discover Your Gaming 
        </motion.h1>
        <motion.h1
            // transition={{delay:0.2}}
            // initial={{x:"-100%",opacity:0}}
            // animate={{x:0,opacity:1}}

            className="text-4xl lg:text-5xl text-gray-800 font-[800] capitalize mb-4">
Addiction
        </motion.h1>
        <motion.h1
            // transition={{delay:0.3}}
            // initial={{x:"-100%",opacity:0}}
            // animate={{x:0,opacity:1}}

            className="text-4xl lg:text-5xl text-gray-800 font-[800] capitalize mb-4">
          and Overcome It!
        </motion.h1>
        </div>
        <motion.p
            // transition={{delay:0.4}}
            // initial={{x:"-100%",opacity:0}}
            // animate={{x:0,opacity:1}}
          className="font-medium  text-black text-gray-800 ">
          Revolutionize gaming habits with our AI-driven addiction detection website
        </motion.p>

        <motion.div
          // initial={{y:"100%",opacity:0}}
          // animate={{y:0,opacity:1}}
          // transition={{delay:0.5}}

          className="flex items-center gap-6 mt-8">
          <Link to="/quiz">
            <Button className="rounded-xl">Start Now!</Button>
          </Link>
          <Link to="/how-it-works">
            <Button className="rounded-xl bg-transparent text-gray-800">
              How It Works?
            </Button>
          </Link>
        </motion.div>

      </div>
      <motion.div
          // initial={{x:"100%",opacity:0}}
          // animate={{x:0,opacity:1}}
          // transition={{delay:0.35}}
        className="hidden   lg:block">
        <img
          className="w-[550px] h-[550px]"
          src="/images/home/doctor.svg"
          alt="doctor image"
        />
      </motion.div>
    </motion.section>
  </main>
);

export default HomePage;
