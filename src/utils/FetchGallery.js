import React , {useState , useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import { production, awsKeys } from '../var/Variables';
import Masonry from 'react-masonry-css'
var Minio = require('minio');

//const mode = (props)

function FetchGallery(props){
    useEffect(()=>{      
        fetchGallery();
    },[props]);
    

    const [items, setItems] = useState([]);

    const fetchGallery = async () => {

        var s3Client = new Minio.Client({
            endPoint:  's3.amazonaws.com',
            accessKey: awsKeys.access,
            secretKey: awsKeys.secret,
            region: production.region
        })
         var objects = [];
         var year = props.year;        
         
        var stream = s3Client.listObjects(production.bucketName,'', true)
        stream.on('data', function(obj) {
             //console.log(obj.name) 
             var regex = new RegExp( `(gallery\/${year}\/)[a-zA-Z0-9_]+`);
             //console.log(regex);
             if(regex.test(obj.name)) {
                   // console.log("matched :: " + obj.name );
                    objects.push(obj);
                    setItems([...objects]);  
                }    
            //setItems(objects);               
            })
        stream.on('error', function(err) { console.log(err) } )

    };

    return( <Masonry
                breakpointCols={3}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {
                    items.map( obj =>{
                        return <div>
                                    <img src= {`https://pixelbug-website.s3.ap-south-1.amazonaws.com/${obj.name}`}/>
                                </div>

                    })
                }
                </Masonry>
    );


}

export default withRouter(FetchGallery);