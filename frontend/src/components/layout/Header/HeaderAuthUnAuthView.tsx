
import Button from "../../ui/Button";
import DarkLightThemeToggler from "../DarkLightThemeToggler";
import { useAuth } from "../../../hooks/useAuth";
import HeaderProfileDropMenu from "./HeaderProfileDropMenu";
import HeaderNotificationsMenu from "./HeaderNotificationsMenu";
import HeaderMessagesMenu from "./HeaderMessagesMenu";
import { motion,AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const HeaderAuthUnAuthView = () => {

  const { isLogged, isLoading } = useAuth();
  return (
    <>
      <AnimatePresence>
        {isLogged && (
          <motion.div
            transition={{ delay: 0.2, duration: 0.2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <AuthencatedUserHeaderView />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && !isLogged && (
          <motion.div
            transition={{ delay: 0.1, duration: 0.2 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <UnAuthencatedUserHeaderView />
          </motion.div>
        )}
      </AnimatePresence>
      </>
  )
}

const AuthencatedUserHeaderView = () => {
  return (
    <div className="flex items-center ">
      <DarkLightThemeToggler />
      <HeaderMessagesMenu />
      <HeaderNotificationsMenu />
      <HeaderProfileDropMenu />
    </div>
  );
};
const UnAuthencatedUserHeaderView = () => {
  return (
    <div className="flex gap-4 items-center">
      <DarkLightThemeToggler />
      <Link to="/accounts/login">
        <Button className="rounded-xl px-8 py-3.5 bg-transparent text-gray-700 dark:text-text-ligther hover:text-primary  capitalize  hover:ring-2  hover:ring-primary-500">
          log in
        </Button>
      </Link>

      <Link to="/accounts/signup">
        <Button className="rounded-xl px-8 py-3.5  capitalize  ring-2 ring-blue-500">
          sign up
        </Button>
      </Link>
    </div>
  );
}
export default HeaderAuthUnAuthView;
