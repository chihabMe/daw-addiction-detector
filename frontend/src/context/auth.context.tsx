import { ReactNode, createContext, useEffect, useState } from "react";
import {
  getUserPath,
  logoutTokenPath,
  obtainTokenPath,
} from "../utils/constants";
import axiosClient from "../utils/axios_client";
import toast from "react-hot-toast";
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
  logout:  () => Promise<void>;
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

  logout: async() => {},
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
      const response = await axiosClient.get(getUserPath);
      setIsLogged(true);
      setUser(response.data);
    } catch (err) {
      setIsError(true);
      setIsLogged(false);
      setUser(null)
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
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
  const logout = async () => {
    setIsLoading(true);
    setIsLogged(false);
    try {
      await axiosClient.post(logoutTokenPath, {
        refresh: localStorage.getItem("refresh"),
      });
    } catch (err) {
      toast.error("An error occurred while attempting to log out");
    } finally {
      localStorage.removeItem("access")
      localStorage.removeItem("refresh")
      setIsLoading(false);
      setUser(null);
      setIsLogged(false);
    }
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
