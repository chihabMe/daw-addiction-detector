import IUISettings from "../../interfaces/IUISettings";
import axiosClient from "../axios_client";
import { uiSettingsPath } from "../constants";

export const getUiSettings = () => axiosClient.get<IUISettings>(uiSettingsPath);
