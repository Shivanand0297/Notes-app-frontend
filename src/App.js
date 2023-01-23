import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import NoteState from './context/notes/NoteState'
// import Alert from './components/Alert'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import Login from './components/Login'
import Signup from './components/Signup'

const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
          <Navbar/>
          {/* <Alert message={"deleted"} /> */}
          <div className='container'>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<Signup/>} />
          </Routes>
          </div>
      </BrowserRouter>
    </NoteState>
  )
}

export default App