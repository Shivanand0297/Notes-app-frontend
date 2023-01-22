import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import "bootstrap/dist/css/bootstrap.min.css"
import NoteState from './context/notes/NoteState'
import Alert from './components/Alert'

const App = () => {
  return (
    <NoteState>
      <BrowserRouter>
          <Navbar/>
          <Alert message={"deleted"} />
          <div className='container'>
          <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
          </Routes>
          </div>
      </BrowserRouter>
    </NoteState>
  )
}

export default App