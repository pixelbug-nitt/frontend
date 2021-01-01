import React, { Component } from 'react';
import EditMyRaw from '../utils/SubmitEMR'
// Email Id:
// Name:
// Club Name:
// WhatsApp Number:
// Event Name:
// Type of event:
// Date:
// Time:
// Location:

class editmyraw extends React.Component{

    

    render(){
        return (   
            <div>
            <div className="bradcam_area">
                <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay imageBGeditmyraw">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Edit my raw</h3>
                                </div>
                            </div>
                            <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        From draft to craft
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
                        <div className="col-lg-8 offset-lg-1">
                        <h3 className="contact-title">Welcome to Edit My Raw</h3>
                            <p>where your amazing pictures are given the attention and treatment from the eyes of the best editors from NIT Trichy. Please fill the form below to submit your picture and have it edited to perfection. <br/>Please ensure your submission doesn't violate any of the rules of the competition.</p>
                            <br/>
                            <EditMyRaw />
                        </div>
                        <div className="col-lg-3"> 
                            <h2 className="contact-title">Rulebook</h2>                           
                            <p className="sample-text" >Read the rulebook <a href="https://editmyraw.s3.ap-south-1.amazonaws.com/rulebook.png" target="_blank">here</a> before your submit the images</p> 
                            <br/>                                                   
                            <h2 className="contact-title">Contact us</h2>                          
                            <div className="media contact-info">
                                <span className="contact-info__icon"><i className="ti-mobile"></i></span>
                                <div className="media-body">
                                    <h3>P Srikar</h3>
                                    <a href="tel:+91 8978510561">+91 8978510561</a>
                                    <h3>T Ajay Shankar</h3> 
                                    <a href="tel:+91 9790992343">+91 9790992343</a>                                    
                                    <h3>Anvar M</h3>
                                    <a href="tel:+91 81240 04834">+91 8124004834</a>                                    
                                </div>
                            </div>                           
                        </div>

                    </div>
                </div>
            </section>
        </div>
   )
    }
}

export default editmyraw;


