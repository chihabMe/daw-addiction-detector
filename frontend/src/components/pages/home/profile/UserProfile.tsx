import { useQuery } from "react-query";
import Spinner from "../../../ui/Spinner";
import { getProfile } from "../../../../services/profile.services";
import ProfileImageInfos from "../../profile/ProfieImageInfos";
import PersonalInfos from "../../profile/PersonalInfos";
import { motion } from "framer-motion";
import AddressInfos from "../../profile/AddressInfos";
const UserProfile = () => {
  const {
    isLoading,
    data: profile,
    isError,
    error,
  } = useQuery("profile", getProfile, {
    refetchOnWindowFocus: "always",
  });
  if (isLoading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Spinner className="w-10 h-10" />
      </div>
    );
  if ((!profile || !profile.data || isError) && error instanceof Error)
    return (
      <div className="w-full text-red-400 min-h-screen flex justify-center items-center">
        {error.message}
      </div>
    );
  if (!profile) return <></>;
  const user = profile.data;
  return (
    <motion.section
      initial={{ opacity: 0.6 }}
      animate={{ opacity: 1 }}
      transition={{delay:0}}
      className="text-black  px-4 dark:text-white w-full "
    >
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.1}}
        className="text-gray-600 text-lg py-4 font-bold"
      >
        Profle Infos
      </motion.h1>
      <motion.ul
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
      transition={{delay:0.2}}
        className="flex flex-col gap-6"
      >
        <ProfileImageInfos
          first_name={user.first_name}
          image={user.image}
          last_name={user.last_name}
          address={user.address}
        />
        <PersonalInfos profile={user} />
        <AddressInfos profile={user} />
      </motion.ul>
    </motion.section>
  );
};

export default UserProfile;
