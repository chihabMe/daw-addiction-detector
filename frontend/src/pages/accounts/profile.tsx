import { useAuth } from "../../hooks/useAuth";

const ProfilePage = () => {
  const { user } = useAuth();
  return <div>{user?.first_name}</div>;
};

export default ProfilePage;
