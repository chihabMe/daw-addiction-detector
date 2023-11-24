import { useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Outlet, useNavigate } from "react-router-dom";
import Spinner from "../ui/Spinner";

function ProtectedRoute() {
  const { isLogged, isLoading } = useAuth();
  const navigate = useNavigate();
  console.log(isLoading)
  console.log(isLogged)

  useEffect(() => {
    if (!isLoading&&!isLogged) {
      navigate("/accounts/login");
    }
  }, []);
  if (isLoading)
    return (
      <div className="w-full min-h-screen flex justify-center items-center">
        <Spinner className="border-primary" />
      </div>
    );

  return (
    <>
      <Outlet />
    </>
  );
}

export default ProtectedRoute;
