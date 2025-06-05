 
import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { auth } from '../firebase.init';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ( {children} ) => {
    
        const [user, setUser] = useState(null)

       const userCreate =(email, password) => {
        return createUserWithEmailAndPassword (auth, email, password)
        
       }

    //    onAuthStateChanged (auth, (currentUser)=>{
    //     if(currentUser){
    //         console.log('has current user', currentUser)
    //     }
    //     else{
    //         console.log('current user', currentUser)
    //     }
    //    })
        
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, currentUser =>{
         console.log('current user inside useEffect auth state change ', currentUser) 
         setUser(currentUser)
       }) 

       return ()=>{
        unSubscribe ();
       }
    }, [])


       const signInUser = (email, password)=>{
        return  signInWithEmailAndPassword(auth, email, password)
        
        
       }

        const userInfo = {
            user,
            userCreate,
            signInUser
        }
  
    return (
         <AuthContext value={userInfo}>
            {children}
         </AuthContext>
    );
};

export default AuthProvider;