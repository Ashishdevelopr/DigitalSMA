import React from 'react'
import "../Service/Service.css";
import webdevelopment from "../../Image/service-development.svg"
import wordpress from "../../Image/service-wordpress.svg"
import facebook from "../../Image/fbads.svg"
const Service = () => {

    return (
        <div id="services" className='reveal'>

            <div className="px-4 py-5 my-5 text-center">
                <h1 className="inter-bold display-4 mb-3">My broad set of <span className="gradient-text">services</span></h1>
                <div className="col-lg-6 mx-auto">
                    <p className="inter-text desc-text mb-4">Our web agency offers a range of innovative and unique web services, with a focus on delivering exceptional results that drive business growth and success.</p>
                </div>

                <div className=' container'>

                    <div className="row g-5 mt-3">

                        {/* <!-- Card item 1 --> */}
                        <div className="col-sm-8 col-lg-4 col-md-10 mx-md-auto col-xl-4 card-zoom">
                            <div className="card h-100 card-border">
                                <div className="card-image">
                                    <img src={webdevelopment} className="card-img" alt="mern development" />
                                </div>
                                <div className="card-body px-4">
                                    <h5 className="inter-bold service-card-title text-start">Web Development</h5>

                                    <h6 className=" mb-3 inter-medium text-start lh-base">We specializing in creating custom websites and web applications that are modern, responsive, and optimized for user experience.</h6>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Card item 2 --> */}
                        <div className="col-sm-8 col-lg-4  col-md-10 col-xl-4 mx-md-auto card-zoom">
                            <div className="card h-100 card-border">
                                <div className="card-image">
                                    <img src={wordpress} className="card-img" alt="wordpress-service-image" />
                                </div>
                                <div className="card-body px-4">
                                    <h5 className="inter-bold service-card-title text-start">Wordpress Website</h5>

                                    <h6 className=" mb-3 onest-medium text-start lh-base"> We make customizing themes, plugins, and adding content to create a fully functional and responsive website using wordpress.</h6>

                                </div>
                            </div>
                        </div>
                        {/* <!-- Card item 3 --> */}
                        <div className="col-sm-8 col-lg-4  col-md-10 col-xl-4 mx-md-auto card-zoom">
                            <div className="card h-100 card-border">
                                <div className="card-image">
                                    <img src={facebook} className="card-img" alt="facebook ads" />
                                </div>
                                <div className="card-body px-4">
                                    <h5 className="inter-bold service-card-title text-start">Facebook Ads</h5>
                                    <h6 className=" mb-3 onest-medium text-start lh-base"> Boost your business's online presence and drive targeted traffic with our expert Facebook Ads service.</h6>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service