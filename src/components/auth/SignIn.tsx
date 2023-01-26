import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../../firebase"


function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const signIn =(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        console.log(userCredential)
        if (userCredential) {
          localStorage.setItem('credential',JSON.stringify(userCredential))
          localStorage.removeItem('movies')
          navigate('/')
        }
        else{
          navigate('sign-in')
        }
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className="sign-in-container mt-5">
      <form onSubmit={signIn}>
        <h1>Login</h1>
        <input 
        type="email" 
        placeholder="Enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          If you dont have account  <Link to={"/sign-up"}>
                  <p className="btn btn-dark">Click</p>
                    </Link>
        </div>
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default SignIn
