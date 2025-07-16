import React from 'react'
import { Link } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>Layout</h1>
      <Link to='/about'> About</Link>
      <Link to='/profile'> Profile</Link>
    </div>
  )
}

export default Layout

