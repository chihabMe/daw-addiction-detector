import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/layout/Header/Header";
import Footer from "../components/layout/Footer/Footer";
import { Toaster } from "react-hot-toast";
const excludeLayoutPaths = ["/quiz","/accounts/profile"];
export function Root() {
  const pathname = useLocation().pathname;
  if (excludeLayoutPaths.includes(pathname)) {
    return (
      <>
        <Outlet />
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 2500,
            className: "bg-white  min-w-[200px] font-medium",
          }}
        />
      </>
    );
  }
  return (
    <>
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 2500,
          className: "bg-white  min-w-[200px] font-medium",
          success: {
            iconTheme: {
              primary: "#3B82F6",
              secondary: "white",
            },
          },
        }}
      />

      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
