import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  let location  = useLocation()
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="/">Notes App</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse w-full" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/" ? "active" : "" }`} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
      </li>
    </ul>
    <div className='float-end'>
    <Link className="btn btn-primary mx-2" to={"/login"} role="button">Login</Link>
    <Link className="btn btn-primary" to={"/signup"} role="button">Signup</Link>

    </div>
  </div>
</nav>
  )
}

export default Navbar