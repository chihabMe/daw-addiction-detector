import { Link } from "react-router-dom";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

const HomePage = () => (
  <main className="min-h-screen px-4 relative ">
    <motion.section
          transition={{delay:0.1,duration:0.4}}
          initial={{y:-50,opacity:0}}
          animate={{y:0,opacity:1}}

      className="flex flex-col py-8 md:flex-row justify-between items-center justify-center min-h-[80vh] max-w-[1400px] mx-auto">
      <div className="w-full lg:w-1/2 font-roboto max-w-[680px] gap-4  flex flex-col justify-center lg:items-start">
        <div>
        <h1

            className="text-3xl md:text-4xl lg:text-5xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4">
          Discover Your Gaming 
        </h1>
        <h1

            className="text-3xl md:text-4xl lg:text-5xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4">
Addiction
        </h1>
        <h1

            className="text-3xl md:text-4xl lg:text-5xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4">
          and Overcome It!
        </h1>
        </div>
        <p
          className="   text-text-darker dark:text-text-ligther  ">
          Revolutionize gaming habits with our AI-driven addiction detection website
        </p>

        <div

          className="flex   items-center gap-6 mt-8">
          <Link to="/quiz" className="">
            <Button className="rounded-xl px-4 py-4 md:px-6 md:py-4 !w-full  ">Start Now!</Button>
          </Link>
          <Link to="/how-it-works" className="">
            <Button className="rounded-xl  px-4 py-4 md:px-6 md:py-4  !w-full bg-transparent text-text-darker dark:text-text-ligther">
              How It Works?
            </Button>
          </Link>
        </div>

      </div>
      <div
        className="hidden   lg:block">
        <img
          className="w-[600px] h-[600px]"
          src="/images/home/doctor.svg"
          alt="doctor image"
        />
      </div>
    </motion.section>
  </main>
);

export default HomePage;
