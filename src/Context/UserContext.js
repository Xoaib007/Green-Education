import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';


export const AuthContext = createContext();
const auth = getAuth(app);
 
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password, photoUrl, displayName) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password, displayName, photoUrl)
    }

    const signIn = (email, password) =>{
        setloading(true); 
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setloading(true);
        return signOut(auth); 
    }

    const providerLogin = (provider) =>{
        return signInWithPopup(auth, provider);
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('usersss', currentUser);
            setloading(false);
        });

        return()=> unsubscribe()
    }, [])
    const authInfo = {user, loading, createUser, signIn, logOut, providerLogin};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;