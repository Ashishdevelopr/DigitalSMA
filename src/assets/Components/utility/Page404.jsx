import React from 'react'
import "./Page404.css"
import page404 from "../../Image/404.png"
import Footer from "../Footer/Footer.jsx"
import { NavLink } from 'react-router-dom'

const Page404 = () => {
  return (
    <div>
      <div className="container ">
        <div className="row">
          <div className="col-md-6 col-sm-10  py-4">
            <div  className="page-content onest-bold">
              <img className="img404" src={page404} alt="Page not found icon"/> 
            </div>
          </div>
          <div className="col-md-6 col-sm-10  py-4 ">
          <h1 className="page-title onest-bold">Oops! </h1>
          <h1 className="page-title2 onest-bold">Page not found </h1>
          <p className='page-desc onest-medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit ectus mattis nunc aliquam tincidunt est non viverra nec eu consectetur adipiscing. </p>
          <NavLink to="/"><button type="button" className="btn btn-darker me-md-2 onest-bold page404-custom mt-2">Go to homepage</button></NavLink>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Page404