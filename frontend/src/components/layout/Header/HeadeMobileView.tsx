import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "../../ui/Button";

interface Props {
  links:{
    href:string;
    text:string;
  }[]
}
const HeaderMobileView = ({}:Props)=>{
  return (
   <div className="  lg:hidden">
      <Button className="bg-transparent px-6 py-2 !rounded-lg">
      <Bars3Icon className="w-6 h-6 text-text-darker dark:text-text-ligther"/>
      </Button>
   </div>
  )
}
export default HeaderMobileView;
