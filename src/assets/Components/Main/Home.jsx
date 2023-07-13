import React from 'react'
import "../Main/Home.css"
import { Typewriter } from 'react-simple-typewriter'
import { NavHashLink } from 'react-router-hash-link'


const Home = () => {

  return (
    <div>
      <div className="container col-12 px-lg-5 px-sm-2 py-3">
        <div className="row align-items-center g-5 py-2">
          <div className="col-lg-12">
            <h1 className="display-2 lh-1.5 mb-3 inter-bold text-center d-none d-md-block">
              We build websites that speak your <span className="gradient-text">
                <Typewriter
                  words={['Brand', 'Vision', 'Culture']}
                  loop={false}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <h1 className="display-2 lh-1.5 mb-3 inter-bold text-center d-sm-block d-md-none">
              We build websites that speak your <br/> <span className="gradient-text">
                <Typewriter
                  words={['Brand', 'Vision', 'Culture']}
                  loop={true}
                  cursor
                  cursorStyle='|'
                  typeSpeed={100}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </h1>
            <p className="onest-medium home-text py-3 px-lg-5 mx-lg-5 text-center inter-text">Our agency blends creativity, technology, and strategy to create web experiences that are both visually stunning and highly functional.</p>
            <div className="d-grid gap-2 d-md-flex justify-content-center text-center py-2">


              <NavHashLink to="#contact">
                <button type="button" className="btn btn-darker me-md-2 onest-bold"><i className="fa-regular fa-envelope mx-1 "></i> Get in touch</button>
              </NavHashLink>

              <NavHashLink to="#portfolio">
                <button type="button" className="btn btn-lighter onest-bold">
                <i className="fa-solid fa-suitcase-rolling mx-1 "></i>  View Porfolio</button>
              </NavHashLink >
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Home