import React, { Component } from 'react';

class Input extends Component {
    
    render(){
        if(this.props.inputtype === "text"){

            return(
                <input placeholder={this.props.placeholder} type={this.props.type} />
            )
        }else if (this.props.inputtype === "textarea"){
            return(
                <textarea placeholder="Short Bio"> </textarea>  
            )
        }else if(this.props.inputtype === "file"){

            return(
                <input className={this.props.className} type="file" />
            )
        }else if(this.props.inputtype === "select"){

            return(
                <select>
                    <option value="Gaza">Gaza</option>
                    <option value="Nasra">Nasra</option>
                    <option value="Londaon">Londaon</option>
                </select>
            )
        }else if(this.props.inputtype === "lable"){

            return(
                <lable> {this.props.content}</lable>
            )
        }
    }
}

export {Input};