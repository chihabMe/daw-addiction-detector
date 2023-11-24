import { ReactNode } from "react";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLogged } = useAuth();
  const navigate = useNavigate();
  if (!isLogged) {
    return navigate("/accounts/login");
  }
  return <>{children}</>;
};

export default ProtectedRoute;
