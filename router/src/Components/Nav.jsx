import React from 'react'
import  {Link } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>Navigation
        <ul>
            <Link to="/">Home</Link>
            <Link to="/abouts">About</Link>
            <Link to="/contact">Contact</Link>
        </ul>
    </nav>
  )
}

export default Nav