import React, { Component } from 'react';
import './style.css';
class Skill extends Component {
    
    render(){
        return(
            <section className="skills--section"> 
                <h2>My Skills</h2>
                <div className="skills">
                <div className="skill"> 
                    <span> HTML </span>
                </div>
                <div className="skill"> 
                    <img src="https://pluralsight.imgix.net/paths/path-icons/nodejs-601628d09d.png" />
                </div>
                <div className="skill"> 
                    <img src="https://www.shareicon.net/download/2016/08/01/639964_internet.svg" />
                </div>
                <div className="skill"> 
                    <img src="https://cdn.auth0.com/blog/react-js/react.png" />
                </div>
                </div>
            </section>
        )
    }
}

export {Skill};