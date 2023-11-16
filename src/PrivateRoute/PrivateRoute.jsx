import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation();


    if(loading){
        return <div className='w-full flex justify-center items-center'><progress className="progress w-56 mt-36 mb-12"></progress></div>
    }

    if(user){
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;