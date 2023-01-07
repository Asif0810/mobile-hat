import React, { createContext, useEffect, useState } from 'react';
import app from '../Firebase/Firebase';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'

export const AuthCotext = createContext();

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)
    const signUp = (email, password) => {
        setloading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const updateuser = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    const signIn = (email, password) => {
        setloading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const google = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const signout = () => {
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])
    const authInfo = {
        user,
        signUp,
        signIn,
        loading,
        signout,
        updateuser,
        google
    }
    return (

        < AuthCotext.Provider value={authInfo}>
            {children}
        </AuthCotext.Provider>

    );
};

export default AuthProvider;