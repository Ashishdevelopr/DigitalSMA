import React from 'react'
import "./Navbar.css"
import { NavHashLink } from "react-router-hash-link"
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
    <div className="navbar-wrapper" id="home">
      <div className='navbar-start'>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand inter-bold" ><span className='gradient-text'>Webpreneur</span></NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse nav-section" id="navbarSupportedContent">
              <ul className="navbar-nav mb-lg-0">
              <li className="nav-item">
                  <NavHashLink to="#portfolio"  
                    className="nav-link inter-semibold  navbar-titles" aria-current="page">Portfolio</NavHashLink>
                </li>

                <li className="nav-item">
                  <NavHashLink to="#services"  
                    className="nav-link  inter-semibold  navbar-titles" aria-current="page">Services</NavHashLink>
                </li>

                <li className="nav-item">
                  <NavHashLink to="#about" 
                    className="nav-link  inter-semibold  navbar-titles" aria-current="page">About</NavHashLink>
                </li>
                <li className="nav-item">
                <NavHashLink to="#question" 
                 className="nav-link  inter-semibold  navbar-titles" aria-current="page">FAQ</NavHashLink>
                </li>
                <li className="nav-item d-lg-none d-md-block">
                <NavHashLink to="#contact"  
                 className="nav-link  inter-semibold  navbar-titles" aria-current="page">Contact</NavHashLink>
                </li>
                <li className="nav-item navbar-btn d-lg-block d-none">
                  <NavHashLink to="#contact"  
                 className="nav-link btn-navbar-contact inter-semibold  navbar-titles navbar-brand" aria-current="page"><i className="fa-regular fa-envelope"></i></NavHashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    </div>
  )
}

export default Navbar