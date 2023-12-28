import { createContext, useContext, useEffect, useState } from "react";
import { GoogleAuthProvider, onAuthStateChanged, signInWithRedirect, signOut } from "firebase/auth";
import { auth } from "../firebase";

//Create context
const AuthContext = createContext();

//Provider context
export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);


    //Sign in with Google
    function signInWithGoogle(){
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider);
    };

    //Sign out
    const logOut = () => signOut(auth)

    const value = {
        currentUser,
        setCurrentUser,
        signInWithGoogle,
        logOut
    };

    //Set user
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false)
        });

        return unsub;
    }, []);

    return (
        <AuthContext.Provider value={value}>
            { !loading && children }
        </AuthContext.Provider>
    )
};

export const UserAuth = () => {
    return useContext(AuthContext);
}