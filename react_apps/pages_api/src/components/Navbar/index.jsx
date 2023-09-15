import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav id="navbar-container">

        <Link to="/">
            <button>Home Page</button>
        </Link>
        <Link to="/about">
            <button>About Page</button>
        </Link>
        <Link to="/poke_cards">
            <button>Cards Page</button>
        </Link>

    </nav>
  )
}

export default Navbar