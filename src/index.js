import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Input extends Component {
  render () {
    return (
      <Fragment>
      <label>{this.props.labelName}</label>
      <input value={this.props.value} onChange={e => this.props.changeFunction(e)}/>
      </Fragment>
    )
  }
}

class Form extends Component {
  render() {
    return (
      <div>
      <Input value="Hello" labelName='Greet'/>
      <Input value={this.props.name} labelName='Name' changeFunction = {this.props.nameChange}/>
      </div>
    )
  }
}

 const CV = props => {

    return (
      <div>
      This is the CV view for {props.name}
      </div>
    )

}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      pageToRender:0,
      name:'Mavis'
    }
    this.changeNameInput = this.changeNameInput.bind(this)
  }

  changeNameInput = e => this.setState({name:e.target.value})
  render() {
    let page = <Form name={this.state.name} nameChange ={this.changeNameInput}/>
    if (this.state.pageToRender ===1) page=<CV name={this.state.name}/>


    return (
      page
    )
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
