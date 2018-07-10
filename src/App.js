import React, { Component } from "react";
import "./App.css";
import { About } from "./components/pages/About/";
import { EducationForm } from "./components/pages/EducationForm/";


class App extends Component {
  render() {
    return (
      <form>
        <About value="send" />
        <EducationForm />
      </form>
    );
  }
}

export default App;
