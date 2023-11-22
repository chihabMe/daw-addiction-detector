import { ReactNode, createContext, useState } from "react";

interface AuthContextState {
  isLogged: boolean;
  isLoading: boolean;
  loging: (email: string, password: string) => void;
  logout: () => void;
}
const initialState: AuthContextState = {
  isLogged: false,
  isLoading: true,
  loging: () => {},
  logout: () => {},
};

export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(initialState.isLogged);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const login = () => {
    setIsLogged(true);
    setIsLoading(false);
  };
  const logout = () => {
    setIsLoading(false);
    setIsLogged(false);
  };
  const value = {
    isLoading,
    isLogged,
    login,
    logout,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
