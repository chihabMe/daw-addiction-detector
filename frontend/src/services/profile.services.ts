import IPatient from "../interfaces/IPatient";
import axiosClient from "../utils/axios_client";
import { getProfilePath } from "../utils/constants";

export const getProfile = () => axiosClient.get<IUser>(getProfilePath);
export const getPaitentProfile = () => axiosClient.get<IPatient>(getProfilePath);
