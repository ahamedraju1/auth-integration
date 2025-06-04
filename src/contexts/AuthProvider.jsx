 
import React from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ( {children} ) => {
  
       const userCreate =(email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
        .then(result=>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error)
        })
       }
       
        const userInfo = {
            userCreate
        }
  
    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;