import React, { useState } from 'react'
import { useLogin } from '../../hooks/useLogin'

function Login({setUser}) {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const { loading, error, login } = useLogin()

  const handelSubmit = (e) => {
    e.preventDefault()
    login(email, password ,setUser)
  }
  return (
    <div className='signUp'>
      <form onSubmit={handelSubmit} className="sign-form">
        <label htmlFor="">email:</label>
        <input onChange={(e) => {
          setEmail(e.target.value)
        }} type="text" placeholder='emailni kiriting...' />
        <label htmlFor="">password:</label>
        <input onChange={(e) => {
          setPassword(e.target.value)
        }} type="text" placeholder='password kiriting...' />
        <button>{loading ? "Singing..." : "Login"}</button>
        <p style={{color:"red"}}>{error}</p>
      </form>
    </div>
  )
}

export default Login