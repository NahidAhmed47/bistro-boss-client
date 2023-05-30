import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
import { json } from 'react-router-dom';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProviders = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // create user
    const signUp = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // sign in with google
    const logInWithGoogle = ()=>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    // Update user info
    const updateUser = (name, photoUrl)=>{
        setLoading(true);
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photoUrl
        });
    }
    // user monitoring 
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setLoading(true);
            console.log(currentUser)
            if(currentUser){
                setUser(currentUser);
                // axios.post('http://localhost:5000/jwt',{email: currentUser.email})
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({email: currentUser.email})
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.token)
                    localStorage.setItem('access-token', data.token);
                })
            }
            else{
                setUser(null);
                localStorage.removeItem('access-token');
            }
            setLoading(false)
        })
        return ()=>{
            unSubscribe();
        }
    },[])
    // user logout
    const logOut = ()=>{
        return signOut(auth)
    }
    const userInfo = {
        user,
        loading,
        signUp,
        logIn,
        updateUser,
        logInWithGoogle,
        logOut
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;