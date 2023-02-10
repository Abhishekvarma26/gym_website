import React from 'react'
import aboutimage from '../images/about.png'
function About(){
    return(
        <div id = 'about'>
            <div className = 'about-image'>
            <img src={aboutimage} alt=''/>
            </div>
            <div className = 'about-text'>
                <h1>LEARN MORE ABOUT US</h1>
                <p>Known For The Unrivaled Success Of Providing State-Of-The-Art Equipment And Fitness Knowledge With A Globally Proven Fitness Training Module And With Certified Trainers And Nutritional Counseling We Have Had A Comprehensive Approach To The Overall Health And Wellbeing Of The Members. At Gym, It’s Not Only About Working Out But Having A Healthy Lifestyle.</p>
                <button>READ MORE</button>
            </div>
        </div>
        
    )
}
export default About;