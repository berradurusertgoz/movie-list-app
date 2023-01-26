import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {auth} from "../../firebase"


function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signUp =(e: { preventDefault: () => void; }) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
        console.log(userCredential)
    }).catch((error) => {
        console.log(error)
    })
  }

  return (
    <div className="sign-in-container">
      <form onSubmit={signUp}>
        <h1>Create An Account</h1>
        <input 
        type="email" 
        placeholder="enter your email" 
        value={email}
        onChange={(e) => setEmail(e.target.value)} />
        <input
          type="password"
          placeholder="enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit'>Sign Up</button>
        <div>
          If you have account  <Link to={"/sign-in"}>
                  <p className="btn btn-dark">Click</p>
                    </Link>
        </div>
      </form>
    </div>
  )
}

export default SignUp
