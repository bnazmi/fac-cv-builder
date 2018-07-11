import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class SkillsForm extends Component {
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
          <Input inputtype="lable" content="Enter skills" className="block" />
          <Input placeholder="Company" inputtype="textarea" name="skills" className="block center" />
          <Input inputtype="lable" content="Add up to 10 skills. Reorder your skills by dragging 
            tags to a new position. Remove skills by deleting tags." className="block" />
          <Button value="cancel" className="block center" />
          <Button value="save" className="block center" onClick={
          this.props.next
        } />
          <hr />
      </section>
    );
  }
}

export {SkillsForm};