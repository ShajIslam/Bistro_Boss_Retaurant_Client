import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'http://localhost:8001'
})

const useAxiosPublic = () => {

    return axiosPublic;
};

export default useAxiosPublic;