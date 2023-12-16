import { PencilIcon } from "@heroicons/react/24/outline";
import Button from "../../ui/Button";
interface Props {
  profile: IUser;
  openModal:()=>void;
}
const AddressInfos = ({ profile,openModal }: Props) => {
  return (
    <div className="outline-1 outline w-full outline-gray-200   rounded-md px-4 py-4 flex items-start justify-between ">
      <div className="flex flex-col gap-2 w-full">

        <h2 className="text-gray-800     py-4   font-bold ">Address</h2>
        <ul className="grid grid-cols-2 gap-4 w-full ">
        <ProfileAddressItem name="Country" value={profile.country??"USA"} />
        <ProfileAddressItem name="City/State" value={profile.city??"New York"} />
        <ProfileAddressItem name="Address" value={profile.address??"NY 10011, USA. 20 Cooper Square"} />
        </ul>
      </div>
      <div className="">
        <Button className="bg-transparent flex items-center gap-2 px-2 py-2 ">
          <PencilIcon className="w-3 h-3 text-gray-400" />
          <span className="text-gray-400 text-sm" onClick={openModal}>Edite</span>
        </Button>
      </div>
    </div>
  );
};
const ProfileAddressItem = ({name,value}:{name:string,value:string})=>{
  return (
  <li className=" flex flex-col gap-4 ">
      <span className="text-gray-400 text-sm font-bold">{name}</span>
      <span className="text-gray-500 text-sm font-bold">{value}</span>
  </li>
  )

}

export default AddressInfos;
