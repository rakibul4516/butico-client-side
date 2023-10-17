import { createContext } from "react";
import PropTypes from 'prop-types';



export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {

    const authData = {

    }

    return (
        <AuthContext.Provider value={authData}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};
export default AuthProvider;


