import React from "react";
import TeamMember from './TeamMember'

function Team(){
    const data = [
    {id:1, img:'/images/1.jpg', name:'HADDAD Amin',position:'Developer',   email:'haddadamino@gmail.com',  phone:'+21653184410'}, 
    {id:2, img:'/images/2.jpg', name:'SD Fatma',   position:'Doc.Engineer',email:'fatma.sdiri24@gmail.com',phone:'+21692351811'},
    {id:3, img:'/images/3.jpg', name:'Kuruf Paul', position:'Designer',    email:'kuruf.paul@gmail.com',                       },
    {id:4, img:'/images/4.jpg', name:'xxxxxx',     position:'xxxxxx',      email:'xxxxxx',                 phone:'xxxxxx',     },
    {id:5, img:'/images/5.jpg', name:'xxxxxx',     position:'xxxxxx',       email:'xxxxxx',                phone:'xxxxxx',     },
    {id:6, img:'/images/6.jpg', name:'xxxxxx',     position:'xxxxxx',       email:'xxxxxx',                phone:'xxxxxx',     },
      ]
       const members= data.map(mbr=>
           <TeamMember 
            key={mbr.id}
            img= {mbr.img}
            name= {mbr.name}
            phone= {mbr.phone}
            position= {mbr.position}
            email= {mbr.email}
            />);
    return(
        <div className="row">
           {members}
       </div>
    );
}
export default Team 