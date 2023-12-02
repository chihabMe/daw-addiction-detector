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
  const inView = useInView(ref, {  amount: "all" });
  useEffect(() => {
    if (inView) {
      animate.start({
        opacity: [0.8, 1],
        scale: 1,
        y: 0,
      });
    }  
  }, [inView]);

  return (
    <Container>
      <section className="">
        <div ref={ref}  className=" grid grid-cols-1 md:grid-cols-2   lg:grid-cols-4  gap-2  py-4  ">
          {ourNumbersData.map((data, idx) => (
            <motion.div
              key={`our_numbers_item_${idx}`}
              initial={{ y: 40, opacity: 0, x: -10, scale: 0.8 }}
              animate={animate}
              transition={{ delay: 0.1 * idx, duration: 0.3 }}
              className="flex  flex-col mx-auto gap-4 w-full min-h-[210px] md:min-h-[200px] md:max-w-[350px] lg:max-w-[280px]   shadow px-4 py-4 rounded-xl  bg-gradient-to-r from-cyan-500 dark:from-cyan-800 dark:to-primary to-blue-300 "
            >
              <NumberItem number={data.number} />
              <p className="font-semibold     text-gray-100">{data.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </Container>
  );
};

const NumberItem = ({ number }: { number: number }) => {
  return <span className="text-4xl   font-bold text-white">{number}K+</span>;
};
export default OurNumbers;
