import React, { Component } from 'react';
import './style.css';
import pic from './img/me.jpg'
class About extends Component {
    
    render(){
        return(
            <section className="about"> 
                 <img src={pic}  />
                 <h1>{this.props.name}</h1>
                 <h3>{this.props.bio}</h3>
            </section>
        )
    }
}

export {About};