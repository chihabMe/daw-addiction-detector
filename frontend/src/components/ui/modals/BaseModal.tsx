import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
import {twMerge} from "tailwind-merge";
interface Props {
  children: ReactNode;
  closeModal: () => void;
  showModal:boolean;
  overlayClassName?:string;
  contentClassName?:string;
containerClassName?:string;
}
const BaseModal = ({ children,containerClassName, contentClassName,overlayClassName,closeModal }: Props) => {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <AnimatePresence>
      <motion.div
          transition={{ delay: 0.1 }}
          initial={{
            opacity: 0,
            zIndex: 10,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            transition:{
            duration:0.2,
          }
          }}
          exit={{
            opacity: 0,
            transition:{
          }

          }}
        onClick={handleCloseModal}
        className={twMerge("fixed top-0 bottom-0 left-0 right-0 bg-gray-800  opacity-60  z-10",overlayClassName)}
      >

      </motion.div>
        <motion.div
          transition={{ delay: 0.3 }}
          initial={{
            opacity: 0,
            position: "fixed",
            top: "-100%",
            left: "50%",
            x: "-50%",
            zIndex: 10,
            scale: 0,
          }}
          animate={{
            opacity: 1,
            y: "-50%",
            top: "50%",
            scale: 1,
          }}
          exit={{
            opacity: 0,
            position: "fixed",
            top: "-100%",
            right: "50%",
            scale: 0,
          }}
          className={twMerge("w-full  ",containerClassName)}
        >
          <div className={twMerge("mx-auto",contentClassName)}>
          {children}
          </div>
        </motion.div>
      </AnimatePresence>
  );
};

export default BaseModal;
