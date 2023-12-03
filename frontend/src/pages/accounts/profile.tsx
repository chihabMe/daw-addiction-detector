import PaitentProfile from "../../components/pages/home/profile/paitent/PaitentProfile";
import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <div className="w-full  py-2">
      {user?.user_type == "PATIENT" && <PaitentProfile />}
    </div>
  );
};

export default ProfilePage;
