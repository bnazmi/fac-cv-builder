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

   import { Header as CVHeader } from "./components/cv/Header";
   import { About as CVAbout } from "./components/cv/About";
   import { Skill as CVSkill } from "./components/cv/Skill";
   import { Experince } from "./components/cv/Experince";
   import { Education } from "./components/cv/Education";
   import { Protofolio } from "./components/cv/Protofolio";
   import { Footer } from "./components/cv/Footer"

class App extends Component {
  onClick = (ev) => {
    ev.preventDefault();
    const { name, bio, file, country, address, email, phone, educationSchool, fromEducation, toEducation, educationDescription, experinceCompany, experienceCountry, city, titleExperince, fromExperince, toExperince, experinceDescription, skills, projectTitle, projectOverview, portfolioCountry, projectUrl, projectSkills } = ev.currentTarget;
      this.setState({ newObject: {
        name: name.value,
        bio: bio.value,
        file: file.value,
        country: country.value,
        address: address.value,
        email: email.value,
        phone: phone.value,
        educationSchool: educationSchool.value,
        fromEducation: fromEducation.value,
        toEducation: toEducation.value,
        educationDescription: educationDescription.value,
        experinceCompany: experinceCompany.value,
        experienceCountry: country.value,
        city: city.value,
        titleExperince: titleExperince.value,
        fromExperince: fromExperince.value,
        // toExperince, this returns undefined
        experinceDescription: experinceDescription.value,
        skills: skills.value,
        projectTitle: projectTitle.value,
        projectOverview: projectOverview.value,
        portfolioCountry: portfolioCountry.value,
        projectUrl: projectUrl.value,
        projectSkills: projectSkills.value,
      } })

    console.log(this.state.newObject);
  }

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
  nextCv=(e)=>{
    e.preventDefault();
    this.setState({ cv: true })
  }
  state = {
    page: 1,
    cv: false,
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
    ],
    newObject: {
    }
  };

  render() {
    if (this.state.cv === false) {
    return (
      <Fragment >
        <Header  domain="cvbuilder.co"  />
      <form onClick={this.onClick}>
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
        <SocialForm className={this.classactive()[5]} id="social" next={this.nextCv} />
      </form>
      </Fragment>
    );
  } else {

      return (
        <Fragment >
          <CVHeader domain="cvbuilder.co" />
          <CVAbout bio={this.state.newObject.bio} image="./../public/me.jpg" name={this.state.newObject.name} />
          <CVSkill />
          <Experince />
          <Education />
          <Protofolio />
          <Footer />
        </Fragment>
      );
    }
  }
}

export default App;
