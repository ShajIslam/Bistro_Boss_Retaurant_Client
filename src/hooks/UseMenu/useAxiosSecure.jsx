import axios from 'axios';
import React from 'react';


const axiosSecure = axios.create({
    baseURL: 'http://localhost:8001'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;