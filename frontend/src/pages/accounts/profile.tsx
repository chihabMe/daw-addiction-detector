import PaitentProfile from "../../components/pages/home/profile/paitent/PaitentProfile";
import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen">
      {user?.user_type == "paitent" && <PaitentProfile />}
    </main>
  );
};

export default ProfilePage;
