// import { useAuth } from "../../hooks/useAuth";

import UserProfile from "../../components/pages/home/profile/UserProfile";

const ProfilePage = () => {
  // const { user } = useAuth();

  return (
    <div className="w-full  py-2">
      <UserProfile/>
    </div>
  );
};

export default ProfilePage;
