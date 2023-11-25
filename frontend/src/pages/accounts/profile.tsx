import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import axiosClient from "../../utils/axios_client";
import { getProfilePath } from "../../utils/constants";

const ProfilePage = () => {
  const { user } = useAuth();
  useEffect(() => {
    const getProfile = async () => {
      const response = await axiosClient.get(getProfilePath);
      console.log(response);
    };
    getProfile();
  }, []);

  return(
    <main className="min-h-screen">
      <section >
      {user?.first_name}
      </section>

    </main>
  )
};

export default ProfilePage;
