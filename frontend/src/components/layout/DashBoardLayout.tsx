import SideBar from "./sidebar/SideBar";
import ProfileHeader from "./Header/ProfileHeader";
import { Outlet } from "react-router-dom";

const DashBoardLayout = () => {
  return (
      <div className="flex w-full max-w-[2000px] mx-auto  bg-gray-100 dark:bg-gray-900">
        <SideBar />
        <div className="w-full gap-4 flex flex-col  ">
          <ProfileHeader />
        <div className="ml-8 mr-4 my-4">
          <Outlet />
        </div>
        </div>
      </div>
  );
};

export default DashBoardLayout;
