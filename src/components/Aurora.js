import React from 'react';
import FetchGallery from '../utils/FetchGallery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


class aurora extends React.Component{
    
    componentDidMount () {
    }
    render(){
        return (   
            <div>
                <div className="bradcam_area ">
                    <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay pb-5 imageBGAurora">
                    <div className="container">
                            <div className="row align-items-center justify-content-center">
                            <div className="col-xl-12">
                                <div className="bradcam_text text-center">              
                                        <h3 className="wow fadeInRight fontSize50" data-wow-duration="1s" data-wow-delay=".3s">Aurora</h3>
                                </div>
                                <section >
                                
                                    <div className="container box_1170 text-center wow fadeInLeft"  data-wow-duration="1s" data-wow-delay=".3s">                                       
                                        <p className="sample-text">
                                        Aurora is our annual flagship event, where we invite acclaimed photographers to share their experiences and advice with the students. What started as an event to bring in more professional exposure to the members is now open to all students, catering to both the beginners and seasoned. The event has brought in dozens of notable speakers, such as 
                                        <strong><a className="linkCompensation" href= "https://instagram.com/prudhvichowdary?igshid=102ve1wjgc2e3" target="_blank" rel="noopener noreferrer"> Prudhvi Chowdary</a>, 
                                        <a className="linkCompensation" href= "https://instagram.com/12mp_me?igshid=m6d09j2net01" target="_blank" rel="noopener noreferrer"> Abhishek Kamble</a>,
                                         <a className="linkCompensation" href= "#" target="_blank"> Arvind Shenoy</a>,
                                         <a className="linkCompensation" href= "https://instagram.com/jeswinrebello?igshid=15g4qcr6ymqw4" target="_blank" rel="noopener noreferrer"> Jeswin Rebello</a>,
                                         <a className="linkCompensation" href= "https://instagram.com/navaneeth_unnikrishnan?igshid=3lovbnoeybqf" target="_blank" rel="noopener noreferrer"> Navaneeth Unnikrishnan</a>,
                                         <a className="linkCompensation" href= "https://instagram.com/praveenpriyadarshanphotography?igshid=oc94921zpxn0" target="_blank" rel="noopener noreferrer"> Praveen Priyadarshan</a>,
                                         <a className="linkCompensation" href= "https://instagram.com/krish_here?igshid=1rouh1ys27wz9" target="_blank" rel="noopener noreferrer"> Krishna Sankar</a></strong>, bringing immense value to the members of pixelbug and attendees alike. 
                                        </p><br/><p className="sample-text">
                                        Knowledge aside, the experiences shared by these renowned artists have been of immense value to the members. Moreover, the spectrum of expertise, consisting of mobile photography, wildlife photography, street photography, light painting, astrophotography, fashion and product have been proven useful to those who have just picked up a DSLR to those who have been working with them for decades. 
                                        </p>                                        
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>                    
                </div>                
                </div>
                <footer className="footer">
                    <div className="footer_top">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-lg-6 col-md-8">
                                    <div className="footer_widget">
                                        <div className="address_details text-center">
                                        
                                            <h3 className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">Aurora 2021</h3>
                                            <h5 className="wow fadeInUp italicizee" data-wow-duration="1s" data-wow-delay=".3s">Coming Soon!</h5>
                                            <p className="wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">Stay tuned to this page for more info!</p>
                                            <a className="boxed-btn3 wow fadeInUp buttonDisabled" data-wow-duration="1s" data-wow-delay=".6s" href="#">Register</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>               
                </footer>
                <div className="brand_area black_bg pt-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <p className="text-center text-danger">Scenes from the previous editions</p>
                        <FetchGallery page="aurora"/> 
                    </div>
                </div>
            </div>
        </div>
            </div>
   )
    }
}

export default aurora;


