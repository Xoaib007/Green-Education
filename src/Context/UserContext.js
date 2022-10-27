import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from '../Firebase/Firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);
 
const UserContext = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setloading] = useState(true);

    const createUser = (email, password) =>{
        setloading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) =>{
        setloading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setloading(true);
        return signOut(auth); 
    }

    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('usersss', currentUser);
            setloading(false);
        });

        return()=> unsubscribe()
    }, [])
    const authInfo = {user, loading, createUser, signIn, logOut};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;