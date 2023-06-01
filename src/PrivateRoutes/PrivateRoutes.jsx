import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <div>loading</div>
    }
    if(user){
        return children;
    }
    return (
        <Navigate state={{from: location}} to='/login'></Navigate>
    );
};

export default PrivateRoutes;