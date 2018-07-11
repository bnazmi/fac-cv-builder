import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class SocialForm extends Component {
  render() {
    return (
      <section className={this.props.className} id={this.props.id}>
          <Input inputtype="lable" content="Add your Social Links" className="block" />
          <Input placeholder="Github Link" inputtype="text" type="text" name="skills" className="block center" />
          <Input placeholder="Linked-In" inputtype="text" type="text" name="skills" className="block center" />
          <Input placeholder="Upwork Link" inputtype="text" type="text" name="skills" className="block center" />
          <Input placeholder="Twitter Link" inputtype="text" type="text" name="skills" className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="save" className="block center" />
          <hr />
      </section>
    );
  }
}

export {SocialForm};