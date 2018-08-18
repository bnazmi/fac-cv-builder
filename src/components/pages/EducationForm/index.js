import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class EducationForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
          <Input placeholder="school" inputtype="text" type="type" name="educationSchool" className="block center" />
          <Input inputtype="lable" content="Date Attends" className="line--center block" />
          <Input inputtype="text" type="date" name="fromEducation" className="block center" />
          <Input inputtype="text" type="date" name="toEducation" className="block center" />
          <Input placeholder="Short Bio!" inputtype="textarea" name="educationDescription" className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="next" className="block center" onClick={
          this.props.next
        } />
          <hr />
      </section>
    );
  }
}

export {EducationForm};
