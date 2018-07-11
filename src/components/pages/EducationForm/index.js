import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class EducationForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
          <Input placeholder="school" inputtype="text" type="type" name="education-school" className="block center" />
          <Input inputtype="lable" content="Date Attends" className="line--center block" />
          <Input inputtype="text" type="date" name="from-education" className="block center" />
          <Input inputtype="text" type="date" name="to-education" className="block center" />
          <Input placeholder="Short Bio!" inputtype="textarea" name="education-description" className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="next" className="block center" />
          <hr />
      </section>
    );
  }
}

export {EducationForm};