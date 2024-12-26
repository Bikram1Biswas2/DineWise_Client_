import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";




const axiosInstance = axios.create({
      baseURL:import.meta.env.VITE_base_URL ,
      withCredentials : true
})

const useAxiosSecure = () => {
      const {logout} = useContext(AuthContext)
      useEffect(()=>{
            axiosInstance.interceptors.response.use((response)=>{
              return response
            } , 
            err => {
                  
                  // if (err.status === 401 || err.status === 403) {
                  //       signOutUser()
                  // }
                  return Promise.reject(err)
            }
      )
      },[logout])
      return axiosInstance
};

export default useAxiosSecure;