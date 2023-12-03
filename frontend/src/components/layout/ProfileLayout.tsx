import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <main className="">
      <h1 className="font-bold text-black dark:text-white text-2xl captialize py-4">
        User
      </h1>
      <div className=" bg-white  dark:bg-dark   w-full  rounded-sm flex  min-h-[65vh]">
        <ul className="flex flex-col w-56 gap-1 py-6 px-2 ">
          <ProfileLayoutListItem text="infos" />
          <ProfileLayoutListItem text="security" />
          <ProfileLayoutListItem text="notifications" />
          <ProfileLayoutListItem text="settings" />
          <ProfileLayoutListItem text="delete account" />
        </ul>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const ProfileLayoutListItem = ({ text }: { text: string }) => {
  return (
    <li className="py-2 hover:bg-blue-50 text-gray-500 rounded-md font-medium px-2 hover:text-primary capitalize transition-all duration-300 cursor-pointer">
      {text}
    </li>
  );
};

export default ProfileLayout;
