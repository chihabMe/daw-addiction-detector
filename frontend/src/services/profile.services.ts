import IPatient from "../interfaces/IPatient";
import axiosClient from "../utils/axios_client";
import { getProfilePath } from "../utils/constants";

export const getPaitentProfile = () => axiosClient.get<IPatient>(getProfilePath);
