import axiosClient from "../utils/axios_client"
import { refreshtokenPath } from "../utils/constants"


export const getRefreshToken = async  ()=>{
  const refresh =  localStorage.getItem("refresh")
  return axiosClient.post(refreshtokenPath,{
    refresh
  })
}
