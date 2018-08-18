import React, { Component } from 'react';
import './style.css'
class Input extends Component {
    
    render(){
        if(this.props.inputtype === "text"){

            return(
                <input className={this.props.className} placeholder={this.props.placeholder} type={this.props.type} name={this.props.name}   />
            )
        }else if (this.props.inputtype === "textarea"){
            return(
                <textarea className={this.props.className} placeholder={this.props.placeholder} name={this.props.name}>  </textarea>  
            )
        }else if(this.props.inputtype === "file"){

            return(
                <input className={this.props.className} type="file"  name={this.props.name} />
            )
        }else if(this.props.inputtype === "select"){

            return(
                <select  name={this.props.name} className={this.props.className}>
                    <option value="Gaza">Gaza</option>
                    <option value="Nasra">Nasra</option>
                    <option value="Londaon">Londaon</option>
                </select>
            )
        }else if(this.props.inputtype === "lable"){

            return(
                <lable className={this.props.className}> {this.props.content}</lable>
            )
        }
    }
}

export {Input};