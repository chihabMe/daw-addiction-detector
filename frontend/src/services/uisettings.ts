import IUISettings from "../interfaces/IUISettings";
import axiosClient from "../utils/axios_client";
import { uiSettingsPath } from "../utils/constants";

export const getUiSettings = () => axiosClient.get<IUISettings>(uiSettingsPath);
