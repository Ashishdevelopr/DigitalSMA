import React from 'react'
import "./Client.css"
import port1 from "../../Image/port1.png"
import roadmap from "../../Image/roadmap.png"

const Client = () => {
    return (

        <div className='client' id="portfolio">
            <div className="px-4 py-5 text-center">
                <h1 className="display-4 mb-3 inter-bold">Our portfolio <span className="gradient-text">collections 
                </span></h1>
                <div className="col-lg-6 mx-auto">
                    <p className="onest-medium service-text mb-4">Our portfolio showcases some of the most innovative and unique web projects we've worked on, each one tailored to meet the specific needs of our clients.</p>
                </div>
            </div>
              <div className="container px-5 mb-5">
                <div className=" client-portfolio row">
                    <div className="client-portfolio-title col-lg-6 col-sm-10 px-4 py-4 mt-4">
                        <h1 className="display-6 mb-3 inter-semibold">Logistics Movers Website</h1>
                        <p className='client-text inter-text'>Introducing the Logistics Movers website, a user-friendly platform designed to streamline logistics and transportation processes. Our web development project focuses on creating an efficient digital solution for logistics companies.</p>
                        <button className='client-portfolio-button onest-medium'><a href='https://logistics-movers.netlify.app/' target='_blank' style={{textDecoration:"none" ,color:"white"}}> Have a look</a> <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="portfolio-image col-lg-6 col-sm-10">
                        <img src={port1} alt="packers and movers image"></img>
                    </div>
                </div>
            </div>

            <div className="container px-5 pb-5 mb-5">
                <div className=" client-portfolio row">
                    <div className="client-portfolio-title col-lg-6 col-sm-10 px-4 py-4 mt-4">
                        <h2 className="display-6 mb-3 inter-semibold">Course Raodmap Website</h2>
                        <p className='client-text inter-text'>A course roadmap website that allows users to read a different courses roadmaps for 
                        learning new skills or completing a specific course. The website is built using React.js for the front-end and Node.js for
                         the back-end, providing a seamless and responsive user experience.</p>
                        <button className='client-portfolio-button onest-medium'>Have a look <i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="portfolio-image col-lg-6 col-sm-10" style={{background:"#20d63d", alignItems:"center"}}>
                        <img src={roadmap} alt="course Roadmap"></img>
                    </div>
                </div>
            </div> 

        </div>
    )
}

export default Client