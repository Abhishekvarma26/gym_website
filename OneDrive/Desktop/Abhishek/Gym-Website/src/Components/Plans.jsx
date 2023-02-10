import React from 'react'
import Plansbox from './Plansbox';
import fimage1 from '../images/plan1.png'
import fimage2 from '../images/plan2.png'
import fimage3 from '../images/plan3.png'
function Plans(){
    return(
        <div id ='plans'>
            <h1>PLANS</h1>        
            <div className = 'b-container'> 

       
            <Plansbox image ={fimage1} para="Starting at ₹ 199 /month 
                                                     + taxes" />
            <Plansbox image ={fimage2} para="Starting at ₹ 499 /month 
                                                     + taxes"/>
            <Plansbox image ={fimage3} para="Starting at ₹ 799 /month 
                                                     + taxes" />

             </div>   
        </div> 
    )
}
export default Plans;