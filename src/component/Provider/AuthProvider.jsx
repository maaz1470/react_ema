import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)
    const[user, setUser] = useState(null);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logoutUser = () => {
        return signOut(auth);
    }

    const userSignIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            if(currentUser){
                setUser(currentUser)
            }else{
                setUser(null)
            }
            
            setLoading(false)
        })
    },[])




    const authInfo = {
        user,
        createUser,
        logoutUser,
        userSignIn,
        loading
    };
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {
                    children
                }
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;