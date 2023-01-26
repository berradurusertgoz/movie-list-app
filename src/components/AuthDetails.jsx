import React, {useState, useEffect} from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth' 
import { auth } from "../firebase"
import MovieList from './MovieList';
import SignUp from './auth/SignUp';



function AuthDetails() {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if(user) {
                setAuthUser(user);
            }
            else {
                setAuthUser(null)
            }
        })
    })

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log("logout successful")
        })
        .catch(error => console.log(error)) 
    }
  return (
    <> 
     </>
       
    
  )
}

export default AuthDetails