import {
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Button from "../../ui/Button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

          // <UserIcon className="w-5 h-5 text-gray-600 dark:text-gray-200 " />
const HeaderProfileDropMenu = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const closeMenu = async () => setOpen(false);
  const navigate = useNavigate();
  const controls = useAnimationControls();
  useEffect(() => {
    if (open) controls.start({ opacity: 1, y: 0, scale: 1 });
  }, [controls, open]);
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger>
        <Button className="bg-transparent  my-2  flex items-center gap-2  rounded-lg active:bg-blue-200  px-6 ">
          <img className="w-8 h-8 rounded-full" src={user?.image}/>
          <span className="capitalize text-text-darker dark:text-text-ligther">
            {user?.first_name}
          </span>
          <ChevronDownIcon
            className={`${
              open && "rotate-180"
            } transition duration-300 w-3 h-3 text-gray-600 dark:text-gray-200 `}
          />
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
                <MenuItem
                  onSelect={() => {
                    navigate("/dashboard/accounts/profile");
                  }}
                  closeMenu={closeMenu}
                >
                  <div className="flex  py-2 cursor-pointer gap-4 items-center text-text-darker group-hover:text-primary group-hover:dark:text-white dark:text-text-ligther">
                    <UserIcon className="w-5 h-5 " />
                    <span className="">Profile</span>
                  </div>
                </MenuItem>

                <MenuItem
                  onSelect={() => {
                    navigate("/accounts/settings");
                  }}
                  closeMenu={closeMenu}
                >
                  <div className="flex  py-2 cursor-pointer gap-4 items-center text-text-darker group-hover:text-primary group-hover:dark:text-white dark:text-text-ligther">
                    <Cog6ToothIcon className="w-5 h-5 " />
                    <span className="w-5 h-5 ">Settings</span>
                  </div>
                </MenuItem>

                <MenuItem
                  onSelect={() => {
                    navigate("/accounts/settings");
                  }}
                  closeMenu={closeMenu}
                >
                  <div className="flex  py-2 cursor-pointer gap-4 items-center text-text-darker group-hover:text-primary group-hover:dark:text-white dark:text-text-ligther">
                    <Cog6ToothIcon className="w-5 h-5 " />
                    <span className="w-5 h-5 ">Quizzes</span>
                  </div>
                </MenuItem>
                <MenuItem
                  closeMenu={closeMenu}
                  onSelect={async () => {
                    await logout();
                    navigate("/");
                  }}
                >
                  <div className="flex  py-2 cursor-pointer gap-4 items-center  text-red-400  ">
                    <ArrowLeftOnRectangleIcon className="w-5 h-5" />
                    <span className="">logout</span>
                  </div>
                </MenuItem>
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

export default HeaderProfileDropMenu;
