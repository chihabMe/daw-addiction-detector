import { useEffect, useRef } from "react";
import Container from "../../layout/Container";
import { motion, useAnimation, useInView } from "framer-motion";
const ourNumbersData = [
  {
    body: "Total tests in last year",
    number: 10,
  },
  {
    body: " Message between paitents and doctors",
    number: 30,
  },
  {
    body: "New registred paitents",
    number: 1,
  },

  {
    body: "Test results generated per month ",
    number: 15,
  },
];
const OurNumbers = () => {

  const animate = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref,{once:true});
  useEffect(() => {
    if (inView) {
      animate.start({
        opacity: 1,
        scale: 1,
      });
    }
  }, [inView]);


  return (
    <Container>
      <section ref={ref} className="">
        <div className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4  gap-2  py-4  ">
          {ourNumbersData.map((data, idx) => (
            <motion.div
              initial={{opacity:0,x:-10,scale:0}}
              animate={animate}
              transition={{delay:0.1*idx,duration:0.3}}
              className="flex  flex-col mx-auto gap-4 w-full min-h-[210px] md:min-h-[200px] md:max-w-[350px] lg:max-w-[280px]   shadow px-4 py-4 rounded-xl  bg-gradient-to-r from-cyan-500 dark:from-cyan-800 dark:to-primary to-blue-300 "
            >
              <span className="text-4xl font-bold text-white">
                ${data.number}K+
              </span>
              <p className="font-semibold     text-gray-100">{data.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

export default OurNumbers;
