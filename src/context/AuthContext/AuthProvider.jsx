import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged,signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase/sirebase.init';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const createUser  = (email, password)  =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

   const singInUser  =(email, password)  =>{
    return signInWithEmailAndPassword(auth, email, password)
   }

  useEffect(() =>{
 const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
    console.log('current user in auth state change',currentUser )
    setUser(currentUser)
 })

 return () =>{
    unsubscribe();
 }
  }, [])

    const authInfo = {
        user,
        createUser,
        singInUser,
    }
    return (
        
            <AuthContext value={authInfo}>
          {children}
            </AuthContext>
         
        
    );
};

export default AuthProvider;