import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';

const AuthProvider = ({ children }) => {
    const [activeUser, setActiveUser] = useState(null)

    // 🔁 Run once when the component mounts
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setActiveUser(user);
        });

        return () => unsubscribe(); // 🧹 Cleanup on unmount
    }, []);


    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userSignOut = () => {
        return signOut(auth)
    }



    const userInfo = { createUser, signIn, activeUser, userSignOut, setActiveUser, }

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;