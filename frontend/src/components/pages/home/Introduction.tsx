import { Link } from "react-router-dom";
import Container from "../../layout/Container";
import Button from "../../ui/Button";
import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
interface Props {
  reverse?: boolean;
  body: string;
  image: string;
}
const Introduction = ({ body, reverse, image }: Props) => {
  const ref = useRef(null);
  const inView = useInView(ref);
  const animateSection = useAnimation();
  const animateImage = useAnimation();
  const animateContent = useAnimation();
  useEffect(() => {
    if (inView) {
      animateSection.start({
        y: 0,
        opacity: 1,
      });
      animateContent.start({
        x: 0,
      });
      animateImage.start({
        x: 0,
      });
    } 
  }, [inView]);
  return (
    <Container>
      <motion.section
        initial={{ y: 50, opacity: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
        animate={animateSection}
        ref={ref}
        className={`flex   py-10   ${
          reverse && "flex-row-reverse"
        } justify-between items-center`}
      >
        <motion.div
          initial={{ x: reverse ? 50 : -50 }}
          animate={animateContent}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="w-1/2 flex flex-col gap-2"
        >
          <p className="text-text-darker dark:text-text-ligther">{body}</p>
          <Link to="/quiz" className="my-2">
            <Button className="py-3 px-6">take a test</Button>
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: reverse ? -50 : 50 }}
          animate={animateImage}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          <img className="w-[500px] h-[500px]" src={image} />
        </motion.div>
      </motion.section>
    </Container>
  );
};

export default Introduction;
