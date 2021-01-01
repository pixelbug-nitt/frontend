import React , {useState , useEffect} from 'react';

//const mode = (props)

function FetchMembers(props){
    useEffect(()=>{      
        fetchMembers();
    },[]);

    const [items, setItems] = useState([]);

    const fetchMembers = async () => {
        const data = await fetch(
            "https://spreadsheets.google.com/feeds/cells/1OlN_6p1u8usdtbo8cIiD2FArgQJA7blfpLN7bEM_xK4/1/public/full?alt=json"
            );

        const members = await data.json();
        console.log(members);
        var team=[];
        var offset = { name: 0, batch : 1, desig : 2, profile : 3,	img : 4 };
        for (var i=1;i<(members.feed.entry.length/6);i++) {
            team.splice(i,0,memberBuilder(members.feed, i));
        }

        function memberBuilder(feed,seed){
            var member =  {
                "name": feed.entry[(6*seed) + offset.name].content.$t,
                "batch": feed.entry[(6*seed) + offset.batch].content.$t,
                "desig": feed.entry[(6*seed) + offset.desig].content.$t,
                "profile": feed.entry[(6*seed) + offset.profile].content.$t,
                "img": feed.entry[(6*seed) + offset.img].content.$t,
            }        
            //console.log(member);
            return member;
        }

        setItems(team);
    };

    return(
        <div className="row">
            {   
                items.map( member=>{
                    var year = new Date().getFullYear();
                    var month = new Date().getMonth();
                    if(month<5) year-=1;
                    if(props.memberType === "core"){
                        if(member.desig === "Core" && (member.batch > year))
                            return <div className="col-lg-6 col-md-6 coreMember ">
                                        <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div data-tilt className="thumb memberImageContainer">
                                                <img src={member.img} className="memberImage" alt=""/>
                                            </div>
                                            <div className="performer_heading textCenterAlign">
                                                <h4>{member.name}</h4>
                                                <p>Core</p>
                                            <a href={"https://instagram.com/"+member.profile} target="_blank" rel="noopener noreferrer"> <span>@{member.profile}</span></a>
                                            </div>
                                        </div>
                                    </div>;
                    }
                    else if(props.memberType === "alumni"){                       
                        if(member.batch <= year){
                            return <div className="col-lg-6 col-md-6 otherMember">
                                        <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div data-tilt className="thumb memberImageContainer">
                                                <img src={member.img} className="memberImage" alt=""/>
                                            </div>
                                            <div className="performer_heading textCenterAlign">
                                                <h4>{member.name}</h4>                                               
                                                <span>Batch of {member.batch}</span>
                                            </div>
                                        </div>
                                    </div>;
                        }
                    }
                    else{                    
                        if(member.desig !== "Core" && (member.batch > year))
                            return <div className="col-lg-6 col-md-6 otherMember">
                                        <div  className="single_performer wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                                            <div data-tilt className="thumb memberImageContainer">
                                                <img src={member.img} className="memberImage" alt=""/>
                                            </div>
                                            <div className="performer_heading textCenterAlign">
                                                <h4>{member.name}</h4>
                                            <a href={"https://instagram.com/"+member.profile} target="_blank" rel="noopener noreferrer"> <span>@{member.profile}</span></a>
                                            </div>
                                        </div>
                                    </div>;
                    }

                    return "";
                    
                })
            }
        </div>
    );


}

export default FetchMembers;