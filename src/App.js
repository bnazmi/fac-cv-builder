import React, { Component } from "react";
import "./App.css";
import { Progress } from "./components/pages/Progress/";
import { About } from "./components/pages/About/";
import { EducationForm } from "./components/pages/EducationForm/";
import { ExperienceForm } from "./components/pages/ExperienceForm/";
import { SkillsForm } from "./components/pages/SkillsForm/";
import { ProtfolioForm } from "./components/pages/ProtfolioForm/";
import { SocialForm } from "./components/pages/SocialForm/";

class App extends Component {
  state = {
    progress: [
      {
        name: "About",
        active: true
      },
      {
        name: "Education",
        active: false
      },
      {
        name: "Experience",
        active: false
      },
      {
        name:"Skills",
        active:false
      },
      {
        name:"Protfolio",
        active:false
      },
      {
        name:"Social",
        active:false
      }
    ]
  };

  render() {
    return (
      <form>
        <ul id="progressbar">
        {
          this.state.progress.map((item,index)=>{
          if(item.active ){ return <Progress className="active" key={index} name={item.name} /> }
          else {
            return <Progress className="" key={index} name={item.name} />
          }
          })
        }
        </ul>
        <About className="active" id="about" />
        <EducationForm className="disable" id="education" />
        <ExperienceForm className="disable" id="experience" />
        <SkillsForm className="disable" id="skills" />
        <ProtfolioForm className="disable" id="protfolio" />
        <SocialForm className="disable active" id="social" />
      </form>
    );
  }
}

export default App;
