import React, { Component , Fragment } from 'react';

import './style.css'

class Progress extends Component {
  render() {

    return (
    <li className={this.props.className}>{this.props.name}</li>
     )
    }
}

export {Progress}