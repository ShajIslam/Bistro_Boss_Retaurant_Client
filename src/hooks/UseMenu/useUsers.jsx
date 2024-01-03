import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../Auth/AuthProvider/AuthProvider";


const useUsers = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);
   
    const { refetch,data : users=[]} = useQuery({
        queryKey: ['users'],
        queryFn: async ()=>{
            try{
                const res = await axiosSecure.get('/users', {
                    headers:{
                        authorization:`Bearer ${localStorage.getItem('access-token')}`
                    } 
                })
                return res.data;
            }
            catch (error) {
                console.error("Error fetching users data:", error);
                throw error;
              }
        }
    })
    return [users, refetch];
};

export default useUsers;