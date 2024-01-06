import { PencilIcon } from "@heroicons/react/24/outline";
import Button from "../../ui/Button";
import UpdateProfileImage from "./UpdateProfileImage";
import UpdateProfileImageModal from "../../modals/UpdateProfileImageModal";
import { useState } from "react";

type Props = Pick<IUser, "first_name" | "last_name" | "image" | "address"> & {
  openModal: () => void;
};
const ProfileImageInfos = (props: Props) => {
  const [isUpdateImageOpen, setIsUpdateImageOpen] = useState(false);
  const closeModal = () => setIsUpdateImageOpen(false);
  const openModal = () => setIsUpdateImageOpen(true);
  return (
    <div className="outline-1 outline w-full outline-gray-200   rounded-md px-4 py-4 flex items-start justify-between ">
      <div className="flex gap-8 ">
        <div>
          <UpdateProfileImageModal
            isOpen={isUpdateImageOpen}
            closeModal={closeModal}
            openModal={openModal}
            image={props.image}
          />
          <img
            alt={`${props.first_name} profle image`}
            src={props.image}
            className="w-[90px] h-[90px] rounded-full cursor-pointer "
            onClick={openModal}
          />
        </div>
        <div className="flex  flex-col ">
          <h2 className=" text-gray-700 py-1 font-bold capitalize dark:text-text-lighter">
            {props.first_name} {props.last_name}
          </h2>

          <h3 className=" text-gray-500 pt-px font-bold text-sm ">Pataint</h3>
          <p className="text-gray-400 pt-1 text-xs font-bold">
            {props.address ?? "Los Angeles , California, USA"}
          </p>
        </div>
      </div>
      <div className="">
        <Button
          className="bg-transparent flex items-center gap-2 px-2 py-2 "
          onClick={props.openModal}
        >
          <PencilIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-sm">Edite</span>
        </Button>
      </div>
    </div>
  );
};

export default ProfileImageInfos;
