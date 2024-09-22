import React from 'react'
import "./Navbar.css"
import { Link, NavLink } from "react-router-dom"
import { projectAuth } from '../../firebase/config'

function Navbar({ user ,setUser}) {
  return (
    <div className='nav' >
      <div className="container">
        <nav className="navbar">
          <h1>MyMoney</h1>
          <h2>{user?.displayName}</h2>
          {user ? <ul><li onClick={()=>{
            projectAuth.signOut()
            setUser(null)
          }} ><a>Log out</a></li></ul> : <ul>
            <li><NavLink to={"/signUp"} >Singn Up</NavLink></li>
            <li><NavLink to={"/login"} >Login</NavLink></li>
          </ul>}
        </nav>
      </div>
    </div>
  )
}

export default Navbar