import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Home1 from "./pages/Home1"
import Home2 from "./pages/Home2"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />}/>
          <Route path="/home2" element={<Home2 />}/>
          <Route path="/home4" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
