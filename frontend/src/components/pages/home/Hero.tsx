import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../../ui/Button";
import Container from "../../layout/Container";

const Hero = () => {
  return (
    <motion.section
      transition={{ delay: 0.1, duration: 0.4 }}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="relative"
    >
      <Container>
        <div className="flex  flex-col  py-8 md:flex-row justify-between items-center justify-center min-h-[80vh]   mx-auto">
          <motion.div className="w-full   lg:w-1/2 font-roboto max-w-[520px] gap-4  flex flex-col justify-center lg:items-start">
            <div>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-2xl md:text-3xl lg:text-4xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4"
              >
                Discover Your Gaming
              </motion.h1>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-2xl md:text-3xl lg:text-4xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4"
              >
                Addiction
              </motion.h1>
              <motion.h1
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-2xl md:text-3xl lg:text-4xl text-text-darker dark:text-text-ligther font-[800] capitalize mb-4"
              >
                and Overcome It!
              </motion.h1>
            </div>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="   text-text-darker dark:text-text-ligther  "
            >
              Revolutionize gaming habits with our AI-driven addiction detection
              website
            </motion.p>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex   items-center gap-6 mt-8"
            >
              <Link to="/quiz" className="">
                <Button className="rounded-xl hover:shadow-lg hover:shadow-blue-500 px-4 py-4 md:px-4 md:text-sm md:py-4 !w-full  ">
                  Start Now!
                </Button>
              </Link>
              <Link to="/how-it-works" className="">
                <Button className="rounded-xl    px-4 py-4 md:px-6 md:py-4  !w-full bg-transparent md:text-sm  text-text-darker dark:text-text-ligther">
                  How It Works?
                </Button>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, ease: "easeInOut" }}
            className="  relativl mx-aue  lg:block"
          >
            <div className="bg-blue-300 dark:bg-blue-900 absolute -z-10 lg:w-[450px] -translate-y-1/2 lg:h-[350px] top-1/2 bottom-1/2 blur-[100px]" />
            <motion.img
              className="w-[500px] h-[500px]"
              src="/images/home/doctor.svg"
              alt="doctor image"
            />
          </motion.div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Hero;
