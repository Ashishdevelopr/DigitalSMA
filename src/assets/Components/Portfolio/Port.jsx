import React from 'react'
import "./Port.css"
import step4 from "../../Image/step1.svg"
import step3 from "../../Image/step2.svg"
import step5 from "../../Image/step3.svg"
import step1 from "../../Image/step4.svg"
import step2 from "../../Image/step5.svg"
import { useNavigate } from 'react-router-dom'
import { NavHashLink } from 'react-router-hash-link'
const Port = () => {
    const navigate = useNavigate()
    return (
        <div id="execution">
            <div className="lg-container  py-5 px-4 portfolio">
                <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-4 py-5 px-4 ">
                    <div className="col d-flex flex-column align-items-start gap-2">
                        <h1 className="display-5 lh-1.5 mb-4 inter-bold">A simple, yet powerful <br /><span className='inter-bold gradient-text'>five step process</span></h1>
                        <p className="lead onest-medium portfolio-text">Working with execution process is important because it helps to make sure the final product meets the client's needs, reduces mistakes, improves efficiency, and ensures timely delivery of the project..</p>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                            <NavHashLink to="#contact">
                            <button onClick={()=>navigate("/contact")} type="button" className="btn btn-darker me-md-2 onest-bold portfolio-custom-btn mt-4"><i className="fa-regular fa-envelope mx-1 "></i> Get in touch</button>
                            </NavHashLink>
                        </div>
                    </div>

                    <div className="col-12">
                        <div className="row row-cols-1 g-2 portfolio-scroll">
                            <div className="portfolio-card mobile mb-3">
                                <img className='protfolio-img ' src={step1} alt="discovery"/>
                                <div className="portfolio-card-text">
                                <h4 className='portfolio-card-title inter-bold'>01. Discovery</h4>
                                <p className='portfolio-desc inter-text'>Gather requirements and get a clear understanding of the client's needs through meetings and discussions.</p>
                                </div>
                            </div>
                            <div className="portfolio-card  mobile mb-3">
                                <img className='protfolio-img' src={step2} alt="planning"/>
                                <div className="portfolio-card-text">
                                <h4 className='portfolio-card-title inter-semibold'>02. Planning</h4>
                                <p className='portfolio-desc inter-text'>After discovery this involves creating a scope of project that outlines the project timeline, and budget. </p>
                                </div>
                            </div>
                            <div className="portfolio-card mobile mb-3">
                                <img className='protfolio-img ' src={step3} alt="design"/>
                                <div className="portfolio-card-text">
                                <h4 className='portfolio-card-title onest-bold'>03. Design</h4>
                                <p className='portfolio-desc onest-medium'>  With the plan in place, the next step is to create the design for the website with the client in the design process.</p>
                                </div>
                            </div>
                            <div className="portfolio-card mobile mb-3">
                                <img className='protfolio-img ' src={step4} alt="development"/>
                                <div className="portfolio-card-text">
                                <h4 className='portfolio-card-title onest-bold'>04. Development</h4>
                                <p className='portfolio-desc onest-medium'>Once the design is approved, the development phase can begin this involves developing the website functionalities and responsiveness across different devices and browsers.</p>
                                </div>
                            </div>
                            <div className="portfolio-card mobile mb-3">
                                <img className='protfolio-img ' src={step5} alt="deployment"/>
                                <div className="portfolio-card-text">
                                <h4 className='portfolio-card-title onest-bold'>05. Deployment</h4>
                                <p className='portfolio-desc onest-medium'>The final step is to launch the website and make it live for the public to access. It's important to ensure that the website is optimized for search engines.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Port