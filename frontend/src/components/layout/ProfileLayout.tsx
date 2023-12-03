import { Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <main className="">
      <h1 className="font-bold text-black dark:text-white text-2xl captialize py-6">
        User
      </h1>
      <div className=" bg-white  dark:bg-dark   w-full px-2 rounded-lg flex  min-h-[65vh]">
        <ul className="flex flex-col w-56 gap-1 p-6">
          <ProfileLayoutListItem text="infos" />
          <ProfileLayoutListItem text="security" />
          <ProfileLayoutListItem text="notifications" />
          <ProfileLayoutListItem text="settings" />
          <ProfileLayoutListItem text="delete account" />
        </ul>
        <div className="">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

const ProfileLayoutListItem = ({ text }: { text: string }) => {
  return (
    <li className="py-2 hover:bg-blue-50 text-gray-500 rounded-md font-medium px-4 hover:text-primary capitalize transition-all duration-300 cursor-pointer">
      {text}
    </li>
  );
};

export default ProfileLayout;
