import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";


const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {


    const auth = getAuth(app);
    const [user, setUser] = useState(null);
    const [loading, setLoading]= useState(true)

    const createUser = (email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const googleSignIn =()=>{
        return signInWithPopup(auth, googleProvider);
    }

    const updateUserProfile = (name, photoUrl)=>{

       return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoUrl })
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            if(currentUser){
                setUser(currentUser);
            }else{
                setUser(null);
            }
            setLoading(false);
        })
        return ()=> {
          return unsubscribe();
        }

    }, [])
    

    const authentications = {
        user,
        loading,
        createUser,
        signIn,
        googleSignIn,
        updateUserProfile,
        logOut

    }


    return (
        <AuthContext.Provider value={authentications}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;