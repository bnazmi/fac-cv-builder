import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class ExperienceForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
          <Input placeholder="Company" inputtype="text" type="type" name="experince-company" className="block center" />
          <Input inputtype="lable" content="Location" className="block line--center" />
          <Input inputtype="text" type="date" name="from-experince" className="block center" />
          <Input inputtype="text" type="date" name="to-experince" className="block center" />
          <Input inputtype="text" type="text" name="title-experince" className="block center" />
          <Input inputtype="lable" content="period" className="block line--center" />
          <Input inputtype="text" type="date" name="from-experince" className="block center" />
          <Input inputtype="text" type="date" name="to-experince "className="block center" />
          <Input placeholder="Short Bio!" inputtype="textarea" name="experince-description" className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="save" className="block center" />
          <hr />
      </section>
    );
  }
}

export {ExperienceForm};