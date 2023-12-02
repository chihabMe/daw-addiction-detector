import SideBar from "../../components/layout/sidebar/SideBar";
import PaitentProfile from "../../components/pages/home/profile/paitent/PaitentProfile";
import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen">
      <SideBar />
      {user?.user_type=="PATIENT"&&<PaitentProfile/>}
    </main>
  );
};

export default ProfilePage;
