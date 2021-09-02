import React , {useState , useEffect} from 'react';

import { google_sheets_key } from '../config/config';

//const mode = (props)

function FetchAlumni(props){
    useEffect(()=>{      
        fetchAlumni();
    },[]);

    const [items, setItems] = useState([]);
    const questions = {
        q1: "Inspiration behind joining Pixelbug",
        q2: "What does Pixelbug mean to you? and how was your experience as a member?",
        q3: "Most memorable moment that Pixelbug has given you",
        q4: "How has Pixelbug improved you as a person?"
    }

    const fetchAlumni = async () => {
        const data = await fetch(
            // "https://spreadsheets.google.com/feeds/cells/1Y96TAPftOl9Annw48Habx6ZobWGENnKtLVVeAc1wBEE/1/public/full?alt=json",
            "https://sheets.googleapis.com/v4/spreadsheets/1Y96TAPftOl9Annw48Habx6ZobWGENnKtLVVeAc1wBEE/values/Sheet1?alt=json&key=" + google_sheets_key
            );

        const members = await data.json();
        //console.log(members);
        var team=[];
        
        // var offset = { name: 0, dept : 1, batch:2, desig : 4, img : 6, cur:7, q1 : 8, q2: 9, q3: 10, q4:11 };
        for (var i=1;i<(members.values.length);i++) {            
            // team.splice(i,0,memberBuilder(members.feed, i));
            team.push(memberBuilder(members.values[i]))
        }

        function memberBuilder(feed){
            var member =  {
                "name": feed[0],
                "dept": feed[1],
                "batch": feed[2],
                "desig": feed[4],
                "cur" : feed[7],
                "img": feed[6],
                "q1": feed[8],
                "q2": feed[9],
                "q3": feed[10],               
                "q4": feed[11]
            }        
            //console.log(member);
            return member;
        }

        setItems(team);
    };

    return(
<div>
    {
        items.map( member =>{
            return <div className="redHeadings">
            <h2 className="mb-30">{member.name}</h2>
            <div className="row">
                <div className="col-md-3">
                    <img src={member.img} alt="" className="img-fluid mb-20"/>
                    <h4>Batch of {member.batch}</h4>
                    <p>{member.desig}</p>
                </div>
                <div className="col-md-9 mt-sm-20">
                    <p className="redFont">{questions.q1}</p><p>{member.q1}</p>
                    <p className="redFont">{questions.q2}</p><p>{member.q2}</p>
                    <p className="redFont">{questions.q3}</p><p>{member.q3}</p>
                    <p className="redFont">{questions.q4}</p><p>{member.q4}</p>
                    <p className="redFont italicizee">Currently {member.name.split(' ').slice(0, -1).join(' ')} is {member.cur}</p>
                </div>
            </div>
        </div>
        })
    }
</div>
        

    );


}

export default FetchAlumni;
