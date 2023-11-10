import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Toaster } from "react-hot-toast";
import {CheckCircleIcon} from "@heroicons/react/24/solid"
export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
      <Toaster   position="bottom-right"   toastOptions={{duration:2500,className:"bg-white  min-w-[200px] font-medium",icon:<CheckCircleIcon className="w-6 h-6 text-primary"/>}}  />
    </> 
  );
}
