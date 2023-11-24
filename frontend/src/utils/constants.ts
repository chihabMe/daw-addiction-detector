export const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllQuestionsPath = API_URL + "/api/v1/questions/";
export const getAllQuestionResponseOptionsPath =
  API_URL + "/api/v1/questions/options/";

export const obtainTokenPath = API_URL + "/api/v1/auth/token/obtain";
export const refreshtokenPath = "/api/v1/auth/token/refresh/";
export const veriftyTokenPath = API_URL + "/api/v1/auth/token/veirfy/";
export const getUserPath = API_URL + "/api/v1/auth/me";
