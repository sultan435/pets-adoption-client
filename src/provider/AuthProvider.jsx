import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../config/firebase.config";
import useAxiosPublic from "../hooks/useAxiosPublic";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true)
    const axiosPublicHook = useAxiosPublic()


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
            if(currentUser){
                const userEmail = {email: currentUser.email}
                axiosPublicHook.post('/jwt', userEmail)
                .then(res =>{
                    console.log(res.data);
                    if(res.data.token){
                        localStorage.setItem('access token', res.data.token)
                        setIsLoading(false)
                    }
                    else{
                        localStorage.removeItem('access token')
                        setIsLoading(false)
                    }
                })
            }          
        })
        return()=>{
            return unsubscribe()
        }

    },[axiosPublicHook])

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