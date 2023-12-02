import Header from "../../components/layout/Header/Header";
import ProfileHeader from "../../components/layout/Header/ProfileHeader";
import SideBar from "../../components/layout/sidebar/SideBar";
import PaitentProfile from "../../components/pages/home/profile/paitent/PaitentProfile";
import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();

  return (
    <main className="min-h-screen flex ">
      <SideBar />
      <div className="w-full">
        <ProfileHeader/>
      {user?.user_type=="PATIENT"&&<PaitentProfile/>}
      </div>
    </main>
  );
};

export default ProfilePage;
