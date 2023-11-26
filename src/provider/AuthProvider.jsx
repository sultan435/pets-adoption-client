import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)


    const googleProvider = new GoogleAuthProvider()

    const createUser = (email, password)=>{
        setIsLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)    
    }

    const loggedUser = (email, password) =>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = ()=>{
        return signOut(auth)
    }

    const googleUser = () =>{
        return signInWithPopup(auth, googleProvider)
    }

    const updateUserProfile = (name, photo) =>{
        return updateProfile(auth.currentUser,{
            displayName: name,
            photoURL: photo,
        })
    }
   
    useEffect(()=>{
       const unsubscribe =  onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            console.log('login user stay', currentUser);
            setIsLoading(false)

        })
        return()=>{
            return unsubscribe()
        }

    },[])

    const authInfo ={
        user,
        isLoading,
        createUser,
        loggedUser,
        googleUser,
        updateUserProfile,
        logout
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;