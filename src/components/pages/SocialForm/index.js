import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class SocialForm extends Component {
  render() {
    return (
      <section className={this.props.className} id={this.props.id}>
          <Input inputtype="lable" content="Add your Social Links" className="block" />
          <Input placeholder="Github Link" name="github" inputtype="text" type="text"  className="block center" />
          <Input placeholder="Linked-In" name="linkedIn" inputtype="text" type="text"  className="block center" />
          <Input placeholder="Upwork Link" name="upWork" inputtype="text" type="text"  className="block center" />
          <Input placeholder="Twitter Link" name="twitter" inputtype="text" type="text"  className="block center" />
          <Button value="cancel" className="block center" />
          <Button value="save" className="block center" onClick={
          this.props.next
        } />
          <hr />
      </section>
    );
  }
}

export {SocialForm};
