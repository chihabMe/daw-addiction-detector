import IPatient from "../../interfaces/IPatient";
import axiosClient from "../axios_client";
import { getProfilePath } from "../constants";

export const getProfile = () => axiosClient.get<IUser>(getProfilePath);
export const getPaitentProfile = () => axiosClient.get<IPatient>(getProfilePath);
