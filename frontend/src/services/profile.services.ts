import axiosClient from "../utils/axios_client";
import { getProfilePath } from "../utils/constants";

export const getProfile = () => axiosClient.get(getProfilePath);
