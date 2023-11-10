import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Toaster } from "react-hot-toast";
export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
      <Toaster   position="bottom-right"   toastOptions={{duration:4500,className:"bg-white  min-w-[200px] font-medium"}}  />
    </> 
  );
}
