import { Bars3Icon } from "@heroicons/react/24/solid";
import Button from "../../ui/Button";
import { useState } from "react";
import BaseModal from "../../ui/modals/BaseModal";

interface Props {
  links: {
    href: string;
    text: string;
  }[];
}
const HeaderMobileView = ({}: Props) => {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const showMobileNavToggler = ()=>setShowMobileNav(p=>!p)
  return (
    <div className="  lg:hidden">
      <Button onClick={showMobileNavToggler} className="bg-transparent px-6 py-2 !rounded-lg z-50">
        <Bars3Icon className="w-6 h-6 text-text-darker dark:text-text-ligther" />
      </Button>
      {showMobileNav && (
        <BaseModal contentClassName="fixed top-0 bottom-0 right-0  z-10 left-0 " overlayClassName="bg-blue-100 z-10"    showModal={showMobileNav} closeModal={showMobileNavToggler} >
          <div className="absolute top-0 bototm-0 right-0 left-0"></div>)
        </BaseModal>
      )}
    </div>
  );
};
export default HeaderMobileView;
