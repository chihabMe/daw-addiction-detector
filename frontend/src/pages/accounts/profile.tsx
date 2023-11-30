import { useQuery } from "react-query";
import { getProfile } from "../../services/profile.services";
import Spinner from "../../components/ui/Spinner";

const ProfilePage = () => {
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
  if (isError && error instanceof Error)
    <div className="w-full text-red-400 min-h-screen flex justify-center items-center">
      {error.message}
    </div>;

  return (
    <main className="min-h-screen">
      <section className="text-white">{JSON.stringify(profile?.data)}</section>
    </main>
  );
};

export default ProfilePage;
