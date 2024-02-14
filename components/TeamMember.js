import React from "react";


function TeamMember(props){
    return(
      
      <div className=" col-md-4 col-sm-6 ">
        <div className="card">
         <div className="card-header">
        <img style={{maxWidth:'100%', height:'250px'}} src ={props.img} alt=""/>
         </div>
           <div className="card-body" style={{background:props.phone ?'LightCyan': 'red'}}>
             <h2>{props.name}</h2>
             <h5 >{props.position}</h5>
             <div style={{background:props.phone ?'Aquamarine': 'white'}}>{props.email}</div>
             <div>{props.phone}</div>
             
           </div>
       </div>
    </div>
    
      
  
    );
}
export default TeamMember