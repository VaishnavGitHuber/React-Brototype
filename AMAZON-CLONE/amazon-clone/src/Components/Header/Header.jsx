import React from 'react'
import "./Header.css"

function Header() {
  return (
    <div>
      <header className="navbar">
        <div className="logo">amazon<span>.in</span></div>
        <div className="search-box">
          <input type="text" placeholder="Search Amazon.in" />
          <button>🔍</button>
        </div>
        <div class="nav-links">
          <a href="#home">Sign In</a>
          <a href="#home">Orders</a>
          <a href="#home">Cart 🛒</a>
        </div>
      </header>
    </div>
  )
}

export default Header
