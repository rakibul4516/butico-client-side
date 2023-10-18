import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/Authprovider';
import PropTypes from 'prop-types';
import { useContext } from 'react';


const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div className='flex justify-center items-center my-auto h-36'><h1 className='text-4xl'>Loading.............</h1></div>
    }
    if (users) {
        return children;
    }
    return (
        <div>
            <Navigate state={location.pathname} to='/login'></Navigate>
        </div>
    )
};

PrivateRoute.propTypes = {
    children: PropTypes.node,
};

export default PrivateRoute;