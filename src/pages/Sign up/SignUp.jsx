import React, { useState } from 'react'
import './SignUp.css'
import { useSingnUp } from '../../hooks/useSignUp'

function SignUp({setUser}) {
  const [email,setEmail]=useState()
  const [password,setPassword]=useState()
  const [name,setName]=useState()
  const {loading,error,signup}=useSingnUp()

  function handleSubmit(e) {
    e.preventDefault()
    signup(email,password,name,setUser)
  }

  return (
    <div className='signUp'>
      <form onSubmit={handleSubmit} className="sign-form">
        <label htmlFor="">email:</label>
        <input   onChange={(e)=>{
          setEmail(e.target.value)
        }}  type="text" placeholder='emailni kiriting...' />
        <label htmlFor="">password:</label>
        <input  onChange={(e)=>{
          setPassword(e.target.value)
        }}  type="text" placeholder='password kiriting...' />
        <label htmlFor="">displayName:</label>
        <input   onChange={(e)=>{
          setName(e.target.value)
        }} type="text" placeholder='ismingizni kiriting...' />
        <button>{loading ? "Sending..." : "Sign up"}</button>
        {error && <p style={{color:"red"}}>{error}</p>}
      </form>
    </div>
  )
}

export default SignUp