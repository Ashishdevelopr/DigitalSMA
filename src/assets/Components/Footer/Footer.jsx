import React from 'react'
import"./Footer.css"
import { NavHashLink } from 'react-router-hash-link'

const Footer = () => {
  return (
    <div className='reveal'>

<footer>
    <div className="container py-5  mx-auto footer-back">
      <div className="row">
        <div className="col-xl-3 col-lg-4 col-md-6">
          <div>
            <h4 className="onest-bold footer-title"><span className='gradient-text'>Webpreneur</span></h4>
            <p className="onest-medium ">Our agency blends creativity, technology, and strategy to create web experiences that are both visually stunning and highly functional.</p>
          </div>
          <ul className="list-unstyled d-flex">
        <li className=""><a className="link-dark" href="https://wa.me/919324280652" target="_blank"><i className="fa-brands fa-whatsapp"style={{color:"#fff", fontSize:"22px"}}/></a></li>
        <li className="ms-4"><a className="link-dark" href="https://www.instagram.com/businessbelieve" target="_blank"><i className="fa-brands fa-instagram"style={{color:"#fff", fontSize:"22px"}}/></a></li>
        <li className="ms-4"><a className="link-dark" href="https://github.com/Ashishdevelopr" target="_blank"><i className="fa-brands fa-github"style={{color:"#fff", fontSize:"22px"}}/></a></li>
      </ul>
        </div>
        <div className="col-xl-2 offset-xl-1 col-lg-2 col-md-6">
          <div className="">
            <h5 className="onest-medium footer-title">Agency</h5>
            <ul className="list-unstyled">
              <li>
                <NavHashLink to="#home" className="text-decoration-none onest-medium">Home</NavHashLink>
              </li>
              <li>
                <NavHashLink to="#about" className="text-decoration-none onest-medium">About Us</NavHashLink>
              </li>
              <li>
                <NavHashLink to="#portfolio" className="text-decoration-none onest-medium">Portfolio</NavHashLink>
              </li>
             
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="onest-medium footer-title">Support</h5>
            <ul className="list-unstyled">
            <li>
                <NavHashLink to="#contact" className="text-decoration-none onest-medium">Contact</NavHashLink>
              </li>
              <li>
                <a href="/#question" className="text-decoration-none onest-medium ">FAQ's</a>
              </li>
              <li>
                <a href="/#about" className="text-decoration-none onest-medium">Features</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-xl-3 col-lg-3 col-md-6">
          <div>
          <h5 className="onest-medium footer-title">Get in Touch</h5>
            <ul className="list-unstyled list">
              <li>
                <p className='onest-medium'>Lokhandwala Township, Kandivali East Mumbai 400101</p>
              </li>
              <li>
                <p className='onest-medium'> Email: <a href="mailto:ashishdevelopr@gmail.com" className="text-decoration-none text-reset  onest-medium">ashishdevelopr@gmail.com</a>
                </p>
              </li>
              
              <li>
                <p className='onest-medium'> Phone: <a href="tel:9324280652" className="text-decoration-none text-reset onest-medium">+91 9324280652</a>
                </p>
              </li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </div>
    <div className="container">
    <div className="d-flex justify-content-center pt-2 border-top border-danger border-opacity-100">
    <p className='footer'><a href='https://github.com/Ashishdevelopr' className='footer-link' target='_blank'>Crafted with passion by  <span className='footer-span'><i className="fa-brands fa-github"></i></span> Ashish Developer</a></p>
    </div>

    </div>

  </footer>
    </div>
  )
}

export default Footer