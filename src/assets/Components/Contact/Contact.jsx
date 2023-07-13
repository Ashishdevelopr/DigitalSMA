import React, { useRef } from 'react'
import emailjs from "@emailjs/browser"
import "./Contact.css"
const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_xnwq2bk", "template_ybz3nhh", form.current, "RB_C-fGVfVnXngOgK")
            .then((result) => {
                alert("Message send successfully");
            }, (error) => {
                alert("Due to some internal issue message not sent, Please try again");
            });
        e.target.reset()
    };


    return (
        <div id="contact" className="reveal">
            <div className="container col-12 px-4 py-5">
                <div className="row align-items-center  py-5 ">
                    <div className="col-lg-5">
                        <h1 className="display-2 lh-1.5 mb-3 inter-bold"><span className='gradient-text inter-bold'>Contact</span> us</h1>
                        <div className='contact-card mb-5 '>
                            <div className="hstack m-0 ">
                                <div className='mx-0'>
                                    <span className="contact-icon"><i className="fa-solid fa-envelope"></i></span>
                                </div>
                                <div>
                                    <h5 className="self-contact onest-medium px-1 pt-2 ">
                                        <a href="mailto:contact@webpreneur.in" className='email-link'>ashishdevelopr@gamil.com</a>
                                    </h5>
                                </div>
                            </div>

                            <div className="hstack m-0 self-contact">
                                <div className='mx-0'>
                                    <span className="contact-icon"><i className="fa-solid fa-phone"></i></span>
                                </div>
                                <div>
                                    <h5 className="onest-medium px-1 pt-2  ">
                                        <a href="tel:9324280652" className='email-link'>
                                            +91 9324280652</a></h5>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-sm-12 col-lg-7 contact-main">
                        <div className=" contact px-4 py-4">
                            <form ref={form} onSubmit={sendEmail} className="contact-form form-validate">
                                <div className="row">

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="onest-bold" htmlFor="Name">Name</label>
                                            <div className='contact-box'>
                                                <span className="input-group-text">
                                                    <i className="fa-regular fa-user form-icon"></i>
                                                    <input type="text" className="control onest-medium" id="Name" name="user_name" placeholder="John West" required={true}></input>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field onest-bold" htmlFor="Email">Email</label>
                                            <div className='contact-box'>
                                                <span className="input-group-text">
                                                    <i className="fa-regular fa-envelope form-icon"></i>
                                                    <input type="email" className="control onest-medium " id="Email" name="user_email" placeholder="contact@gmail.com" required={true}></input>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field onest-bold" htmlFor="Phone">Phone</label>
                                            <div className='contact-box'>
                                                <span className="input-group-text">
                                                    <i className="fa-solid fa-phone"></i><input type="tel" className="control onest-medium " id="Name" name="user_phone" placeholder="999-990-7890" required={true}></input>
                                                </span>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-sm-6 mb-3">
                                        <div className="form-group">
                                            <label className="required-field onest-bold" htmlFor="Subject">Subject</label>
                                            <div className='contact-box'>
                                                <span className="input-group-text">
                                                    <i className="fa-regular fa-pen-to-square form-icon"></i>
                                                    <input type="text" className="control onest-medium " id="Name" name="user_subject" placeholder="Enter" required={true}></input>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-3">
                                        <div className="form-group">
                                            <p className="required-field onest-bold" htmlFor="Subject">Message:</p>
                                            <div className='contact-box'>
                                                <span className="input-group-text">
                                                    <textarea type="text" className="control onest-medium " id="message" name="user_message" placeholder="Hi there, I would like to....." rows="5" style={{ width: "550px" }} ></textarea>
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-sm-12 mb-1">
                                        <button type="submit" name="submit" className="contact-btn onest-medium py-3 mt-4">Send Message</button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact