import React , {useState , useEffect} from 'react';

import { google_sheets_key } from '../config/config';

//const mode = (props)

function FetchMembers(props){
    useEffect(()=>{      
        fetchMembers();
    },[]);

    const [items, setItems] = useState([]);

    const fetchMembers = async () => {
        const data = await fetch(
            // "https://spreadsheets.google.com/feeds/cells/1A_fAFbjEjJnsOQOVbpSIR2ivOw3pIxHqlAE5XaD2r20/1/public/full?alt=json"
            "https://sheets.googleapis.com/v4/spreadsheets/1A_fAFbjEjJnsOQOVbpSIR2ivOw3pIxHqlAE5XaD2r20/values/Sheet1?alt=json&key=" + google_sheets_key
            );

        const videos = await data.json();
        console.log(videos);
        var videoGallery = [];
        // var offset = { id: 1, title : 2, desc : 3, crew : 4};
        for (var i=2;i<(videos.values.length);i++) {
            // videoGallery.splice(i,0,videoBuilder(videos.feed,i));
            videoGallery.push(videoBuilder(videos.values[i]))
        }
        function videoBuilder(feed){
            var member =  {
                "id": feed[0],
                "title": feed[1],
                "desc": feed[2],
                "crew": feed[3],
            }        
            //console.log(member);
            return member;
        }

        setItems(videoGallery);
    };

    return(
        <div className="blog_left_sidebar">
            {   
                items.map( video =>{
                    return <article className="blog_item">
                                <div className="blog_item_img">
                                    <iframe title={video.id} width="100%" height="400px" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>                                  
                                </div>

                                <div className="blog_details">
                                    <a className="d-inline-block" href="single-blog.html">
                                        <h2>{video.title}</h2>
                                    </a>
                                    <p>{video.desc}</p>
                                    <ul className="blog-info-link">
                                        <li><i className="fa fa-user"></i> Crew: {video.crew} </li>                                        
                                    </ul>
                                </div>
                            </article>;
                    
                })
            }
        </div>
    );


}

export default FetchMembers;