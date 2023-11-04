import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
export function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer/>
    </>
  );
}
