import { AnimatePresence, motion } from "framer-motion";
import { ReactNode } from "react";
interface Props {
  children: ReactNode;
  closeModal: () => void;
  showModal:boolean;
}
const BaseModal = ({ children, closeModal }: Props) => {
  const handleCloseModal = () => {
    closeModal();
  };
  return (
    <>
      <div
        onClick={handleCloseModal}
        className="fixed top-0 bottom-0 left-0 right-0 bg-gray-900 opacity-60 z-10"
      ></div>
      <AnimatePresence>
        <motion.div
          transition={{ delay: 0.1 }}
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
          className="w-full  "
        >
          <div className="mx-auto">
          {children}
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default BaseModal;