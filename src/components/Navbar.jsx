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
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/" ? "active" : "" }`} to="/">Home</Link>
      </li>
      <li className="nav-item">
        <Link className={`nav-link ${location.pathname === "/about" ? "active" : "" }`} to="/about">About</Link>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar