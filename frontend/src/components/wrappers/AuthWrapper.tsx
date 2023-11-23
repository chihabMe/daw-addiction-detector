import { ReactNode, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";

const AuthWrapper = ({ children }: { children: ReactNode }) => {
  const { loadUser, isLoading } = useAuth();
  useEffect(() => {
    loadUser();
  }, []);
  if (isLoading) return <h1>laoding</h1>;
  return <>{children}</>;
};

export default AuthWrapper;
