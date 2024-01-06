export const API_URL = import.meta.env.VITE_BACKEND_URL;

export const getAllQuestionsPath = API_URL + "/api/v1/questions/";
export const getAllQuestionResponseOptionsPath = API_URL + "/api/v1/questions/options/";

export const obtainTokenPath = API_URL + "/api/v1/auth/token/obtain/";
export const refreshtokenPath = API_URL + "/api/v1/auth/token/refresh/";
export const veriftyTokenPath = API_URL + "/api/v1/auth/token/veirfy/";
export const logoutTokenPath = API_URL + "/api/v1/auth/token/logout/";
export const getUserPath = API_URL + "/api/v1/auth/me/";

export const getProfilePath = API_URL+"/api/v1/accounts/profile/";
export const getAnswers = API_URL+"/api/v1/answers/"; //add the user id;

export const userRegistrationpath = API_URL + "/api/v1/accounts/register/";

export const uiSettingsPath = API_URL+"/api/v1/uisettings"
