import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import axiosClient from "../../utils/axios_client";
import { getProfilePath } from "../../utils/constants";
import { useQuery } from "react-query";
import { getProfile } from "../../services/profile.services";

const ProfilePage = () => {
  const { user } = useAuth();

  const query = useQuery("profile",getProfile)
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
