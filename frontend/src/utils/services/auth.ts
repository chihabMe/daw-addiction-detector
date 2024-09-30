import axiosClient from "../axios_client"
import { refreshtokenPath } from "../constants"


export const getRefreshToken = async  ()=>{
  const refresh =  localStorage.getItem("refresh")
  return axiosClient.post(refreshtokenPath,{
    refresh
  })
}
