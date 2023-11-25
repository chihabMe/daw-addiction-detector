import axios  from "axios";
import { refreshtokenPath } from "./constants";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  exp: number;
  sub: string;
  // Add other fields based on your JWT structure
}

let accessToken = localStorage.getItem("access") ?? null;

export const axiosClient = axios.create({
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${accessToken}`,
  },
});

axiosClient.interceptors.request.use(async (req) => {
  console.log("-----run-----");
  if (!accessToken) {
    accessToken = localStorage.getItem("access") ?? null;
  }
  let isValid = false;
  if (accessToken) {
    const user: DecodedToken = jwtDecode(accessToken);
    const currentTimestamp = Math.floor(Date.now() / 1000);
    isValid = user && user.exp > currentTimestamp;
  }

  if (isValid) {
    req.headers.Authorization = `Bearer ${accessToken}`;
    return req;
  }

  const refreshToken = localStorage.getItem("refresh");
  console.log("-------------")
  console.log(refreshToken)

  if (!refreshToken) {
    // If there's no refresh token, simply return the request
    return req;
  }

  try {
    // Attempt to refresh the access token using the refresh token
    const response = await axios.post(refreshtokenPath, {
      refresh: refreshToken,
    });

    // Update the access token in local storage
    localStorage.setItem("access", response.data.access);

    // Update the Authorization header with the new access token
    req.headers.Authorization = `Bearer ${response.data.access}`;
  } catch (error) {
    // Handle the error (e.g., log it, redirect to login, etc.)
    console.error("Token refresh failed:", error);
  }

  return req;
});
export default axiosClient;
