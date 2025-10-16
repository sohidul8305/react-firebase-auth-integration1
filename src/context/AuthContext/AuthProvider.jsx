import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase/sirebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true);
    const createUser  = (email, password)  =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const singInUser  =(email, password)  =>{
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password)
   }

   const signOutUser = () =>{
    setLoading(true)
    return signOut(auth);
   }

  useEffect(() =>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    console.log('current user in auth state change',currentUser )
    setUser(currentUser);
    setLoading(false);
 })

 return () =>{
    unsubscribe();
 }
  }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        singInUser,
        signOutUser,
    }
    return (
        
            <AuthContext value={authInfo}>
          {children}
            </AuthContext>
         
        
    );
};

export default AuthProvider;