import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {

    const[user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)  

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleLogin = () =>{
        return signInWithPopup(auth,googleProvider)
    }

    const updateUser = (updateUser) =>{
        return updateProfile(auth.currentUser,updateUser)
    }

    const logOut = async()=>{
        try{
       await signOut(auth)
       setUser(null)
      toast.success('LogOut Successfully')
        }catch{
           console.log("Logout failed",
           error.message)
           toast.error('LogOut Failed')
        }
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
           setUser(currentUser)
           setLoading(false)
        })
   },[])


    const authInfo = {
         user,
         loading,
         setUser,
         createUser,
         signInUser,
         googleLogin,
         updateUser,
         logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
             <Toaster position="top-center" reverseOrder={false} />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;