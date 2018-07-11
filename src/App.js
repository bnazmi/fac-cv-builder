import React, { Component , Fragment } from "react";
import "./App.css";
import { Progress } from "./components/pages/Progress/";
import { Header } from "./components/forms/Header/";
import { About } from "./components/pages/About/";
import { EducationForm } from "./components/pages/EducationForm/";
import { ExperienceForm } from "./components/pages/ExperienceForm/";
import { SkillsForm } from "./components/pages/SkillsForm/";
import { ProtfolioForm } from "./components/pages/ProtfolioForm/";
import { SocialForm } from "./components/pages/SocialForm/";

class App extends Component {

  classactive=(e)=>{
     const pageactive = this.state.progress.map((item) => {
      if(item.activepage ){ 
        return "active"
      }
      else {
        return "disable"
      }
    })
    return pageactive;
    
  }

  previous=(e)=>{
    e.preventDefault();
    const newProg = this.state.progress.map((item, index) => {
      if(this.state.page >= index) {
         item.active = false;
         item.activepage = false;
         if(this.state.page === index) {
           item.activepage=false;
         }

      } 
    
      else{
         item.active = true;
      } 
      return item;
    })
    this.setState({
      ...this.state,
      page: ++this.state.page,
      progress: newProg
    });
  }
  next=(e)=>{
    e.preventDefault();
    const newProg = this.state.progress.map((item, index) => {
      if(this.state.page >= index) {
         item.active = true;
         item.activepage = false;
         if(this.state.page === index) {
           item.activepage=true;
         }

      } 
    
      else{
         item.active = false;
      } 
      return item;
    })
    this.setState({
      ...this.state,
      page: ++this.state.page,
      progress: newProg
    });
  }
  state = {
    page: 1,
    progress: [
      {
        name: "About",
        active: true ,
        activepage : true
      },
      {
        name: "Education",
        active: false,
        activepage : false
      },
      {
        name: "Experience",
        active: false,
        activepage : false
      },
      {
        name:"Skills",
        active:false,
        activepage : false
      },
      {
        name:"Protfolio",
        active:false,
        activepage : false
      },
      {
        name:"Social",
        active:false,
        activepage : false
      }
    ]
  };

  render() {
    return (
      <Fragment >
        <Header  domain="cvbuilder.co"  /> 
      
      <form>
        <ul id="progressbar">
        {
          this.state.progress.map((item,index)=>{
          if(item.active ){ 
            return <Progress className="active" key={index} name={item.name} /> 
          }
          else {
            return <Progress className="" key={index} name={item.name} />
          }
          })
        }
        </ul>
        <About className={this.classactive()[0]} id="about" next={this.next} />
        <EducationForm className={this.classactive()[1]} id="education" next={this.next} previous={this.previous} />
        <ExperienceForm className={this.classactive()[2]} id="experience" next={this.next} />
        <SkillsForm className={this.classactive()[3]}id="skills" next={this.next} />
        <ProtfolioForm className={this.classactive()[4]} id="protfolio" next={this.next} />
        <SocialForm className={this.classactive()[5]} id="social" next={this.next} />
      </form>
      </Fragment>
    );
  }
}

export default App;
