import React from 'react'
import Featurebox from './Featurebox';
import fimage1 from '../images/1.svg'
import fimage2 from '../images/2.svg'
import fimage3 from '../images/3.svg'
import fimage4 from '../images/4.svg'
function Feature(){
    return(
        <div id = 'features'>
            <h1>FEATURES</h1>
            <div className='a-container'>
                
            <Featurebox image={fimage1} title="WeightLifting" para="Weightlifting purely to develop physical strength can lead to the development body for bodybuilding."/>
            <Featurebox image={fimage2} title="Specific Muscle" para="Bench presses and lifting weights to tone your upper body, doing squats and lunges tone your lower body."/>
            <Featurebox image={fimage3} title="Flex Your Muscle" para="Activation of muscles causing shortening and bulging in different parts of the body"/>
            <Featurebox image={fimage4} title="Cardio Excersie" para="Running a long distance at a moderate pace is an aerobic exercise, including those of the legs,abdominal,chest and arms."/>
            </div>

        </div>
    )

    
}
export default Feature;