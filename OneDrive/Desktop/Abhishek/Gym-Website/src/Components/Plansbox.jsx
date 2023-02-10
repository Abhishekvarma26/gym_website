import React from 'react'

function Plansbox(props){
    return(
        <div className = 'b-box'>
        <div class = 'b-b-img'>
            <img src ={props.image} alt=''/>
        </div>
        <div className = 'b-b-text'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
       </div>

        </div>

        
    )
}
export default Plansbox;