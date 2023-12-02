import { useQuery } from "react-query";
import Spinner from "../../../../ui/Spinner";
import { getPaitentProfile } from "../../../../../services/profile.services";
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
  if ((!profile || isError) && error instanceof Error)
    <div className="w-full text-red-400 min-h-screen flex justify-center items-center">
      {error.message}
    </div>;
  return (
    <section>
      <h1> {profile?.data.user.email} </h1>
      <h1> {profile?.data.user.user_type} </h1>
    </section>
  );
};

export default PaitentProfile;
