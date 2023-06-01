import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();

    if(isAdminLoading || loading){
        return <progress className='w-56 progress'></progress>
    }
    if(user && isAdmin){
        return children;
    }
    return (
        <Navigate to="/" state={{from: location}} replace></Navigate>
    );
};

export default AdminRoutes;