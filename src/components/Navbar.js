import React from 'react';
import {Link, NavLink} from "react-router-dom";

class Navbar extends React.Component {
    render(){
      return (
          
        <header>
        <div className="header-area ">
            <div id="sticky-header" className="main-header-area">
                <div className="container">
                    <div className="header_bottom_border">
                        <div className="row align-items-center">
                            <div className="col-xl-3 col-lg-3">
                                <div className="logo">
                                  <Link to="/"> <img className="navLogoMobile" src="img/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-9 col-lg-9">
                                <div className="main-menu  d-none d-lg-block">
                                    <nav>
                                        <ul id="navigation">
                                            <NavLink to="/" exact activeStyle={{color:'red'}}> <li><a>home</a></li></NavLink>  
                                            <NavLink to="/about" exact activeStyle={{color:'red'}}> <li><a>about us</a></li></NavLink>                                             
                                            <NavLink to="/members" exact activeStyle={{color:'red'}}> <li><a>members</a></li></NavLink>
                                            <NavLink to="/gallery" exact activeStyle={{color:'red'}}> <li><a>Works</a></li></NavLink> 
                                            {/* <li><a>Gallery <i className="ti-angle-down"></i></a>
                                                <ul className="submenu">
                                                <li><Link to="/gallery/photos">Photo</Link> </li>
                                                <li><Link to="/gallery/videos">Video</Link> </li>                                              
                                                </ul>
                                            </li> */}
                                            <NavLink to="/aurora" exact activeStyle={{color:'red'}}> <li><a className="overlineDeco">Aurora</a></li></NavLink> 
                                            <NavLink to="/contact" exact activeStyle={{color:'red'}}> <li><a>Contact</a></li></NavLink>
                                            {/* <NavLink to="/editmyraw" exact activeStyle={{color:'red'}}> <li><a>Edit My Raw</a></li></NavLink> */}
                                           
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                           
                            <div className="col-12">
                                <div className="mobile_menu d-block d-lg-none"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </header>
      )
    }
}

export default Navbar;