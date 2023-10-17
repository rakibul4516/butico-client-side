import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "../firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [users, setUsers] = useState(null)
    const [loading, setLoading] = useState(true)

    //Register
    const handleUserRegister = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    //Login
    const handleUserLogin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    //login with google 
    const loginWithGoogle = () => {
        const provider = new GoogleAuthProvider()
        return signInWithPopup(auth, provider)
    }

    //Logout
    const userSignOut = () => {
        setLoading(true)
        signOut(auth).then(() => {
            console.log("logOut succesfully")
        })
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, user => {
            setUsers(user)
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
    }, [])
    const authData = {
        users,
        loading,
        handleUserRegister,
        handleUserLogin,
        loginWithGoogle,
        userSignOut
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


