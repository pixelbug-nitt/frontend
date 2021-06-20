import React from 'react';
import FetchMembers from '../utils/FetchMembers';
import { Link } from 'react-router-dom';


class members extends React.Component{    

    render(){
        return (           
        <div className="performar_area black_bg">
             <div className="bradcam_area">
                <div className="single_bradcam pt-50">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Members</h3>
                                </div>      
                                <section >
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        The bravehearts behind the Canons, satisfying their appetence to capture.
                                            <br/>Learn more about <Link to="/members/alumni" className="linkCompensation" >Our Veterans</Link>, the masters who trained us in the art  
                                        </p>                                       
                                    </div>
                                </section>                          
                            </div>
                            </div>
                    </div>
                </div>
            </div>    
        <div className="container core">           
            <div className="row justify-content-center">
                <div className="col-lg-6 memberFitContent">
                    <FetchMembers memberType="core" />                    
                </div>
            </div>
        </div>
        <div className="container members">           
            <div className="row justify-content-center">
                <div className="col-lg-6 memberFitContent">
                <FetchMembers memberType="other" />                                       
                </div>
            </div>
        </div>
        <div className="container webOps">           
            <div className="row justify-content-center">
                <div className="col-lg-4 memberFitContent">
                    <div className="row " >
                        <div className="col-lg-12 col-md-12 text-center">
                        <p className="mb-20">This website was designed and developed by </p>
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src="img/gandalf.jpg" className="webopsImg" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Yagnesh L P</h4>
                                    <span>Alumni</span>                                    
                                </div>
                            </div>
                            <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                <div data-tilt className="thumb">
                                    <img src="img/priyanshu.jpg" className="webopsImg" alt=""/>
                                </div>
                                <div className="performer_heading">
                                    <h4>Priyanshu Dangi</h4>
                                    <span>Head, WebOps</span>                                    
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>
            </div>
        </div>
    </div>

    

        )
    }
}

export default members;