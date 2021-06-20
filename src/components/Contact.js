import React, { Component } from 'react';
// Email Id:
// Name:
// Club Name:
// WhatsApp Number:
// Event Name:
// Type of event:
// Date:
// Time:
// Location:

class contact extends React.Component{
    render(){
        return (   
            <div>
            <div className="bradcam_area">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay imageBGcontact">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Contact</h3>
                                </div>
                            </div>
                            <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        Would you like us to cover your event? Got any queries? Contact us
                                        </p>                                        
                                    </div>
                                </section>
                            </div>
                    </div>
                </div>
            </div>         
            <section className="contact-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3"> 
                        <h2 className="contact-title">Contact us</h2>                          
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-mobile"></i></span>
                                <div className="media-body">
                                    <h3>Niteesh Kumar S</h3>
                                    <a href="tel:+91 7708236408">+91 7708236408</a>
                                    <h3>GSP PONNIRAIVAN</h3> 
                                    <a href="tel:+91 7418621705">+91 7418621705</a>                                    
                                    <h3>Hemgugan</h3>
                                    <a href="tel:+91 7338750233">+91 7338750233</a>                                    
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-email"></i></span>
                                <div className="media-body">
                                    <a href="mailto:pixelbugnittrichy@gmail.com"><h3>pixelbugnittrichy@gmail.com</h3></a>
                                    {/* <p>Send us your query anytime!</p> */}
                                </div>
                            </div>
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-location-arrow"></i></span>
                                <div className="media-body">
                                    <h3>NIT Trichy</h3>
                                    <p>Tanjavur Highway, 620015</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 offset-lg-1">
                        <h3 className="contact-title">For Event Coverage Requests, fill this form</h3>
                            <form className="form-contact contact_form"  id="contactForm" novalidate="novalidate">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="name" id="name" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="club" id="club" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter your name'" placeholder="Club"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="email" id="email" type="email" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Email"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="form-group">
                                            <input className="form-control valid" name="number" id="number" type="tel" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email address'" placeholder="Whatsapp Number"/>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-group">
                                            <input className="form-control" name="event" id="event" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Event name"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <input className="form-control" name="date" id="date" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Date"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <input className="form-control" name="time" id="time" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Time"/>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <input className="form-control" name="venue" id="venue" type="text" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter Subject'" placeholder="Location"/>
                                        </div>
                                    </div>                                   
                                </div>
                                <div className="form-group mt-3" id="formMessage">
                                    <button type="submit" className="button button-contactForm boxed-btn">Send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
   )
    }
}

export default contact;


