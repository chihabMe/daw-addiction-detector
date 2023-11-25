import {
  UserIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/solid";
import Button from "../../ui/Button";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import {  useNavigate } from "react-router-dom";
import { AnimatePresence, motion, useAnimationControls } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";
import { useAuth } from "../../../hooks/useAuth";

const HeaderProfileDropMenu = () => {
  const {user,logout} = useAuth()
  const [open, setOpen] = useState(false);
  const closeMenu = async () => setOpen(false);
  const navigate = useNavigate();
  const controls = useAnimationControls();
  useEffect(() => {
    if (open) controls.start({ opacity: 1, y: 0 });
  }, [controls, open]);
  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button className="IconButton" aria-label="Customise options">
          <Button className="bg-transparent px-6">
            <UserIcon className="w-6 h-6 text-gray-600 dark:text-gray-200 " />
          </Button>
        </button>
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
                exit={{ opacity: 0, y: -3 }}
              >
                <MenuItem
                  onSelect={() => {
                    navigate("/accounts/profile");
                  }}
                  closeMenu={closeMenu}
                >
                  <div className="flex  py-2 cursor-pointer gap-4   items-center text-text-darker group-hover:text-primary dark:text-text-ligther">
                    <UserIcon className="w-5 h-5 " />
                    <span className="" >{user?.email}</span>
                  </div>
                </MenuItem>

                <MenuItem
                  onSelect={() => {
                    navigate("/accounts/profile");
                  }}
                  closeMenu={closeMenu}
                >
                  <div className="flex  py-2 cursor-pointer gap-4 items-center text-text-darker group-hover:text-primary dark:text-text-ligther">
                    <Cog6ToothIcon className="w-5 h-5 " />
                    <span className="w-5 h-5 ">Settings</span>
                  </div>
                </MenuItem>
                <MenuItem closeMenu={closeMenu} onSelect={async()=>{
                  await logout()
                  navigate("/")

                }}>
                  <div className="flex py-2 cursor-pointer gap-4 text-red-400 items-center   cursor-pointer ">
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
          x: [2, 0],
        });

        await closeMenu();
        onSelect && onSelect();
      }}
      className="      px-2 py-2 rounded-lg  transition duration-200  group"
    >
      <motion.div animate={controls}>{children}</motion.div>
    </DropdownMenu.Item>
  );
};

export default HeaderProfileDropMenu;
