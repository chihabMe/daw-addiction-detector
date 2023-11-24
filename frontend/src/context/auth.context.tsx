import { ReactNode, createContext, useEffect, useState } from "react";
import { getUserPath, obtainTokenPath } from "../utils/constants";
interface ILoginResponse {
  success: boolean;
  error?: {
    message: string;
    fields?: Record<string, string>; // Update the structure if necessary
  };
}
interface AuthContextState {
  isLogged: boolean;
  isLoading: boolean;
  isError: boolean;
  user: null | IUser;
  loadUser: () => void;
  login: (email: string, password: string) => Promise<ILoginResponse>;
  logout: () => void;
  error: Record<string, string>;
}
const initialState: AuthContextState = {
  isLogged: false,
  user: null,
  isLoading: true,
  loadUser: () => {},
  //@ts-ignore
  login: async (email: string, password: string) => {
    return {
      success: false,
    };
  },

  logout: () => {},
  error: {},
  isError: false,
};

export const authContext = createContext(initialState);

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
  const [isLogged, setIsLogged] = useState(initialState.isLogged);
  const [isLoading, setIsLoading] = useState(initialState.isLoading);
  const [user, setUser] = useState(initialState.user);
  const [error, setError] = useState(initialState.error);
  const [isError, setIsError] = useState(initialState.isError);

  const loadUser = async () => {
    try {
      setIsLoading(true);
      const res = await fetch(getUserPath, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("access")}`,
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("unable to fetch user");
      }
      const data = await res.json();
      setIsLogged(true);
      setUser(data);
    } catch (err) {
      setIsError(true);
      setIsLogged(false);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLogged(true);
    const config = {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await fetch(obtainTokenPath, config);
      const data = await res.json();
      if (!res.ok) {
        setIsError(true);
        setError(data);
        return {
          success: false,
          error: { message: "unable to login", fields: data }, // Update the structure if necessary
        };
      } else {
        localStorage.setItem("access", data.access);
        localStorage.setItem("refresh", data.refresh);
        setIsError(false);
        setError({});
        await loadUser();
        return { success: true };
      }
    } catch (err) {
      setIsError(true);
      setError({});
      return { success: false, error: { message: "unable to log in" } };
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    loadUser();
  }, []);
  const logout = () => {
    setIsLoading(false);
    setIsLogged(false);
  };
  const value: AuthContextState = {
    isLoading,
    isLogged,
    loadUser,
    user,
    login,
    logout,
    isError,
    error,
  };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};
