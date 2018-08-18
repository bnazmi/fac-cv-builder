import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class ExperienceForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
          <Input placeholder="Company" inputtype="text" type="type" name="experinceCompany" className="block center" />
          <Input inputtype="lable" content="Location" className="block line--center" />
          <Input inputtype="text" type="date" name="experienceCountry" className="block center" />
          <Input inputtype="text" type="date" name="city" className="block center" />
          <Input inputtype="text" type="text" name="titleExperince" className="block center" />
          <Input inputtype="lable" content="period" className="block line--center" />
          <Input inputtype="text" type="date" name="fromExperince" className="block center" />
          <Input inputtype="text" type="date" name="toExperince "className="block center" />
          <Input placeholder="Short Bio!" inputtype="textarea" name="experinceDescription" className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="save" className="block center" onClick={
          this.props.next
        } />
          <hr />
      </section>
    );
  }
}

export {ExperienceForm};
