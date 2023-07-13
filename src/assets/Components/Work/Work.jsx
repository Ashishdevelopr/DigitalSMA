import React from 'react'
import "./Work.css"
import { useNavigate } from 'react-router-dom'

import f1 from "../../Image/f1.png"
import f2 from "../../Image/f2.png"
import f3 from "../../Image/f3.png"
import f4 from "../../Image/f4.png"
import f5 from "../../Image/f5.png"
import f6 from "../../Image/f6.png"
import { NavHashLink } from 'react-router-hash-link'


const Work = () => {
    const navigate = useNavigate()


    const WorkList = [
        {
            title: "High Performance",
            description: "We deliver exceptional websites that guarantee superior results with lightning-fast speed and flawless functionality.",
            image: f1,
        },
        {
            title: "Responsive Designs",
            description: "Our expertise lies in crafting immersive user experiences across all devices, ensuring maximum engagement and conversion rates.",
            image: f2,
        },
        {
            title: "Client-Centric Approach",
            description: "Your goals and preferences take center stage as we tailor web design experiences that exceed your expectations.",
            image: f3,
        },
        {
            title: "Flexibility and Scalability",
            description: "Our adaptable solutions seamlessly accommodate the growth of your business, empowering you to stay ahead of the competition.",
            image: f4,
        },
        {
            title: "Free Training",
            description: "We equip you with the knowledge and skills to confidently manage and update your website, putting you in control of your online success.",
            image: f5,
        },
        {
            title: "Innovative UX/UI Design",
            description: "Our transformative UX/UI designs revolutionize user experiences, creating  visually stunning interfaces that drive conversions.",
            image: f6,
        },
    ]
    return (
        <div id="about" className='reveal'>
            <div className="container col-12 px-4 py-5">
                <div className="row g-5 py-2">

                    <div className="col-lg-8 col-sm-12">
                        <h1 className="display-4 inter-bold lh-1.5 mb-3"> Reason's behind all this  <span className='gradient-text inter-bold'>great work?</span> </h1>
                        <p className="inter-text card-text">We take pride in rolling up our sleeves and putting in the hard work required to deliver exceptional web solutions for our clients.</p>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <div className="d-grid  d-md-flex justify-content-start mt-2">
                            <NavHashLink to="#contact">
                                <button type="button" className="btn btn-darker btn-lg  me-md-2">
                                    <i className="fa-solid fa-globe mx-1"></i>   Let's build website</button>
                            </NavHashLink>
                        </div>
                    </div>
                  

                    {
                        WorkList.map((workData, id) =>
                            <div className="card-zoom card-size" key={id}>
                                <div className="card work-card-border">
                                    <div className="work-card-body px-4">


                                        <img src={workData.image} className='work-icons'></img>
                                        <h5 className="inter-semibold text-start work-text">{workData.title}</h5>
                                        <h6 className=" mb-3 onest-medium text-start lh-base">{workData.description}</h6>
                                    </div>
                                </div>
                            </div>

                        )
                    }








                </div>

            </div>
        </div>
    )
}

export default Work