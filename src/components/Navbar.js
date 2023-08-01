import React from 'react'
import { Link } from 'react-router-dom'
import "../css components/navbar.css"

const Navbar = () => {
  return (
    <nav>
        <h1>User data</h1>
        <ul>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/contact">contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar