// src/components/Header.js
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'

function Header() {
  return (
    <header className="custom-header">
      <nav className="navbar navbar-expand-lg">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="navbar-brand logo-text" to="/">
            Namibia school
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>

          <div className="collapse navbar-collapse justify-content-between align-items-center" id="navbarContent">
            <ul className="navbar-nav d-flex flex-row gap-3 mb-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/events">Events</Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  More
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link className="dropdown-item" to="/about">About</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="/faq">FAQ</Link></li>
                </ul>
              </li>
              <li className="nav-item">
                <span className="nav-link disabled" tabIndex="-1" aria-disabled="true">Coming Soon</span>
              </li>
            </ul>

            <form className="d-flex search-form align-items-center ms-3">
              <input
                className="form-control search-input"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn search-btn" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
