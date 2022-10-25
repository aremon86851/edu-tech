import React from 'react';
import { createUserWithEmailAndPassword, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import app from '../firebase.init';
import { createContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

export const AuthContext = createContext()

const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()

    const googleProvider = new GoogleAuthProvider()

    const githubProvider = new GithubAuthProvider()

    const createUserWithEmail = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInWithEmail = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const forgetPassword = email => {
        return sendPasswordResetEmail(auth, email)
    }

    const setProfile = profile => {
        return updateProfile(auth.currentUser, profile)
    }

    const logInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider)
    }

    const logInWithGithub = () => {
        return signInWithPopup(auth, githubProvider)
    }


    const logOut = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
            setUser(loggedInUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    const values = { user, logOut, setProfile, forgetPassword, createUserWithEmail, signInWithEmail, logInWithGoogle, logInWithGithub }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;