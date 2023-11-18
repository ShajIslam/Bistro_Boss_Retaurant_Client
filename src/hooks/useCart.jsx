import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./UseMenu/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider/AuthProvider";


const useCart = () => {
    const axiosSecure = useAxiosSecure();
    const {user} = useContext(AuthContext);

    const {refetch, data : cart = []} = useQuery({
        queryKey: ['cart', user?.email],
        queryFn: async ()=> {
            try {
                const res = await axiosSecure.get(`/carts?email=${user?.email}`);
                return res.data;
              } catch (error) {
                console.error("Error fetching cart data:", error);
                throw error;
              }
        }
    })
    return [cart, refetch];
};

export default useCart;