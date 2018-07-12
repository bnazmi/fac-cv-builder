import React, { Component } from 'react';
import './style.css';
class Experince extends Component {
    
    render(){
        return(
            <section className="experince--section"> 
                <h2>Experince</h2>
                <div className="experinces">
                <div className="experince"> 
                    <h3> Web developer | Digital marketing | Freelancer </h3>
                    <span> December 2017 - Present</span>
                    <p> It is a communication company that provide communication
 system in large institution. Provide software, web development , IT solution and etc. I am a small team... more</p>
                </div>
                <div className="experince"> 
                    <h3>Founder the Palcode Copmany </h3>
                    <span>December 2016 - Mar 2017</span>
                    <p> It is a communication company that provide communication
 system in large institution. Provide software, web development , IT solution and etc. I am a small team... more</p>
                </div>
                </div>
            </section>
        )
    }
}

export {Experince};