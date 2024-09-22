import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Navbar from './components/navbar/Navbar'
import SignUp from './pages/Sign up/SignUp'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import { useEffect } from 'react'
import { projectAuth } from './firebase/config'

function App() {
  const [user, setUser] = useState(null)
  const [ready, setReady] = useState(false)

  useEffect(() => {
    projectAuth.onAuthStateChanged((item) => {
      setUser(item);
      setReady(true)
    })
  }, [])

  return (
    <div>
      <BrowserRouter>
        <Navbar setUser={setUser} user={user} />
        {ready && <Routes>
          {user && <Route path='/' element={<Home  user={user}/>} />}
          {!user && <Route path='/' element={<Navigate to={"login"} />} />}

          {user && <Route path='/signUp' element={<Navigate to={"/"} />} />}
          {!user && <Route path='/signUp' element={<SignUp setUser={setUser} />} />}

          {user && <Route path='/login' element={<Navigate to={"/"} />} />}
          {!user && <Route path='/login' element={<Login setUser={setUser} />} />}

          {/* <Route path='/login' element={<Login setUser={setUser} />} /> */}
        </Routes>}
      </BrowserRouter>
    </div>
  )
}

export default App