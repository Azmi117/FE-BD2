import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Home1 from "./pages/Home1"
import Home2 from "./pages/Home2"
import Home3 from "./pages/Home3"
import Home4 from "./pages/Home4"
import Home5 from "./pages/Home5"
import Home7 from "./pages/Home7"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />}/>
          <Route path="/home2" element={<Home2 />}/>
          <Route path="/home3" element={<Home3 />}/>
          <Route path="/home4" element={<Home4 />}/>
          <Route path="/home5" element={<Home5 />}/>
          <Route path="/home7" element={<Home7 />}/>
          <Route path="/home8" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
