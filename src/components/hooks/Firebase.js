import authInitialize from "../../Firebase/firebase.initialize"
import { GoogleAuthProvider,getAuth,signInWithPopup ,onAuthStateChanged ,signOut, getIdToken} from "firebase/auth";
import { useEffect, useState } from "react";

const googleProvider = new GoogleAuthProvider();

authInitialize()

const useFirebaseAuth=()=>{
    const [user,setUser]=useState({})
    const [error,setError]=useState('')

    const auth = getAuth();

    const googleSignIn=()=>{
       return signInWithPopup(auth, googleProvider)
    }

    const logOut=()=>{
        signOut(auth).
        then(() => {
           setUser({})
          }).catch((error) => {
           setError(error.message)
          });
    }
    useEffect(()=>{
     const unsubscribe=onAuthStateChanged(auth, (user) => {
            if (user) {
                getIdToken(user).then(idToken=>{localStorage.setItem("idToken",idToken)})
             setUser(user)
            } else {
                setUser({})
            }

          });
          return ()=> unsubscribe
    },[])
 return {
     user,
     googleSignIn,
     logOut
 }
}
export default useFirebaseAuth