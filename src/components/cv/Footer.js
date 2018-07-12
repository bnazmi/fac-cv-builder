import React, { Component } from 'react';
import './style.css';
class Footer extends Component {
    
    render(){
        return(
            <section className="footer--section"> 
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.1.0/css/all.css" integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt" crossorigin="anonymous" />
                <div className="social--icon" > 
                    <i class="fab fa-github"></i> 
                    <i class="fab fa-linkedin"></i>
                    <i><img src="http://icons.iconarchive.com/icons/papirus-team/papirus-apps/256/upwork-icon.png" /></i>
                    <i class="fab fa-twitter-square"></i>
                </div>
                <p>Made widh <i class="fas fa-heart" id="red"></i> </p>
            </section>
        )
    }
}

export {Footer};