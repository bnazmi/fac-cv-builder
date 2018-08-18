import React, { Component } from 'react';
import './style.css';
class Protofolio extends Component {
    
    render(){
        return(
            <section className="protofolio--section"> 
                <h2>Protofolio</h2>
                <div className="protofolioes">
                <div className="protofolio"> 
                    <h3> One Page Food Restaurant</h3>
                    <span> DECEMBER 2017</span>
                    <p> Web and Mobile Design psd-to-html, responsive-web-design, jquery, css3, html5, html
one responsive page design using pure css and jquery library implemented by UX design concept.</p>
                    <a href="#"> Demo</a>
                </div>
                </div>
            </section>
        )
    }
}

export {Protofolio};