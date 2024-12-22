import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { createContext } from "react";
import { auth } from "../firebase/firebase.config";
import { Toaster } from "react-hot-toast";

export const AuthContext = createContext(null)


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


    const authInfo = {
         user,
         loading,
         setUser,
         createUser,
         signInUser
    }

    return (
        <AuthContext.Provider value={authInfo}>
             <Toaster position="top-center" reverseOrder={false} />
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;