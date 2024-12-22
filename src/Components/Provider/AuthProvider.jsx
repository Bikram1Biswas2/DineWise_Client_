import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { Toaster } from "react-hot-toast";

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


    const authInfo = {
         user,
         loading,
         setUser,
         createUser,
         signInUser,
         googleLogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
             <Toaster position="top-center" reverseOrder={false} />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;