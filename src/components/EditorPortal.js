import React, { Component } from 'react';
import EditedImage from "../utils/SubmitEdited";
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

class editor extends React.Component{

    render(){
        const { match } = this.props;       
        return ( 
           <div>
                <div className="bradcam_area">
                    <div className="single_bradcam  d-flex align-items-center bradcam_bg_1 overlay fullpage ">
                        <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-xl-12 text-center">
                                        <div className="card pd">
                                            <h2>Hi there</h2>
                                            <p>Your alloted picture is available at following link. Open the link and right click to save it </p> 
                                            <a href={"https://editmyraw.s3.ap-south-1.amazonaws.com/submission/" + match.params.rawLink }>https://editmyraw.s3.ap-south-1.amazonaws.com/submission/{match.params.rawLink}</a>
                                            <p>Once you are done editing, upload the file and submit</p> 
                                            <EditedImage/>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>         
                {/* <GalleryMode mode={match.params.mode}/>*/}
            </div> 
    )
    }
}

export default withRouter(editor);


