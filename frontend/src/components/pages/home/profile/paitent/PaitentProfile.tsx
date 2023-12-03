import { useQuery } from "react-query";
import Spinner from "../../../../ui/Spinner";
import { getPaitentProfile } from "../../../../../services/profile.services";
import ProfileImageInfos from "../../../profile/ProfieImageInfos";
import PersonalInfos from "../../../profile/PersonalInfos";
const PaitentProfile = () => {
  const {
    isLoading,
    data: profile,
    isError,
    error,
  } = useQuery("profile", getPaitentProfile, {
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
  const user = profile.data.user;
  return (
    <section className="text-black px-4 dark:text-white w-full ">
      <h1 className="text-gray-600 text-lg py-4 font-bold">
        Profle Infos
      </h1>
      <ul className="flex flex-col gap-6">
      <ProfileImageInfos
        first_name={user.first_name}
        image={user.image}
        last_name={user.last_name}
        address={user.address}
      />
      <PersonalInfos profile={profile.data} />
      </ul>
    </section>
  );
};

export default PaitentProfile;
