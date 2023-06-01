import React from 'react';
import useAdmin from '../hooks/useAdmin';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';

const AdminRoutes = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin();
    const {user, loading} = useAuth();
    const location = useLocation();

    if(isAdminLoading || loading){
        return <progress className='w-56 progress'></progress>
    }
    return (
        <div>
            
        </div>
    );
};

export default AdminRoutes;