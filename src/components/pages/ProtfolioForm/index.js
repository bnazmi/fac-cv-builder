import React, { Component, Fragment } from "react";

import { Button } from "../../forms/Button";
import { Input } from "../../forms/Input";

class ProtfolioForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
        <Input placeholder="Project Title" inputtype="text" type="type" name="projectTitle" className="block center" />
        <Input placeholder="Project Overview!" inputtype="textarea" name="projectOverview" className="block center" />
        <Input inputtype="select" name="portfolioCountry" className="block center" />
        <Input placeholder="Project URL" inputtype="text" type="text" name="projectUrl" className="block center" />
        <Input placeholder="project-skills" inputtype="textarea" name="projectSkills" className="block center"  />
        <Button value="save" className="block center" onClick={
          this.props.next
        } />
        <Button value="cancel" className="block center" />
        <hr />
      </section>
    );
  }
}

export { ProtfolioForm };
