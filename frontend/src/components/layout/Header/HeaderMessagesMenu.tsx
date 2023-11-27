import { EnvelopeIcon, EnvelopeOpenIcon } from "@heroicons/react/24/solid";
import Button from "../../ui/Button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
// import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
// import { useAuth } from "../../../hooks/useAuth";

const messages = [
  {
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing ",
  },

  {
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing ",
  },

  {
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing ",
  },

  {
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing ",
  },

  {
    body: "Lorem ipsum dolor sit amet, qui minim labore adipisicing ",
  },
];

const HeaderMessagesMenu = () => {
  // const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const closeMenu = async () => setOpen(false);
  // const navigate = useNavigate();
  const controls = useAnimationControls();
  useEffect(() => {
    if (open) controls.start({ opacity: 1, y: 0, scale: 1 });
  }, [controls, open]);
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger>
        <Button className="bg-transparent  px-6 relative ">
          <EnvelopeIcon className="w-5 h-5 text-gray-600 dark:text-gray-200 " />
          <span className=" bg-red-400 w-2 rounded-full text-center text-[13px] h-2  absolute top-1/4 right-4">
          </span>
        </Button>
      </DropdownMenu.Trigger>

      <AnimatePresence>
        {open && (
          <DropdownMenu.Portal forceMount>
            <DropdownMenu.Content
              align="end"
              asChild
              className="bg-light flex flex-col  px-2 py-2 dark:bg-dark w-[300px] shadow rounded-xl z-50  py-2"
              sideOffset={5}
            >
              <motion.div
                initial={{ opacity: 0, y: -5 }}
                animate={controls}
                exit={{ opacity: 0, y: -3, scale: 0.95 }}
              >
                {messages.map((item, idx) => (
                  <MenuItem
                    onSelect={closeMenu}
                    closeMenu={closeMenu}
                    key={`notification_item_${idx}`}
                  >
                    <motion.div
                      initial={{opacity:0,y:-10}}
                      animate={{opacity:1,y:0}}
                      transition={{delay:0.1*idx}}
                      className="text-text-darker cursor-pointer dark:text-text-lighter text-xs">
                      {item.body}
                    </motion.div>
                  </MenuItem>
                ))}
              </motion.div>
            </DropdownMenu.Content>
          </DropdownMenu.Portal>
        )}
      </AnimatePresence>
    </DropdownMenu.Root>
  );
};
const MenuItem = ({
  children,
  closeMenu,
  onSelect,
}: {
  children: ReactNode;
  closeMenu: () => Promise<void>;
  onSelect?: () => void;
}) => {
  const controls = useAnimationControls();
  return (
    <DropdownMenu.Item
      onSelect={async (e) => {
        e.preventDefault();
        await controls.start({
          opacity: [0.5, 1],
          scale: [0.99, 1],
          transition: { duration: 0.25 },
        });

        await closeMenu();
        onSelect && onSelect();
      }}
      className="   outline-none hover:shadow hover:bg-blue-50 dark:hover:bg-dark dark:hover:shadow-gray-700    px-2 py-2 rounded-xl   transition duration-200  group"
    >
      <motion.div animate={controls}>{children}</motion.div>
    </DropdownMenu.Item>
  );
};

export default HeaderMessagesMenu;
