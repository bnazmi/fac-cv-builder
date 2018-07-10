import React, { Component , Fragment } from 'react';

import { Button } from '../../forms/Button';
import { Input } from '../../forms/Input';


class About extends Component {
  render() {
    return (
      <Fragment>
          <Input placeholder="Name" inputtype="text" type="type" />
          <Input placeholder="Short Bio!" inputtype="textarea" />
          <Input inputtype="file" />
          <Input inputtype="select" />
          <Input placeholder="Address" inputtype="text" type="text" />
          <Input placeholder="Email" inputtype="text" type="email" />
          <Input placeholder="Phome" inputtype="text" type="text" />
          <Input inputtype="text" type="radio" />
          <Input inputtype="lable" content="Are you freelancer" />

          <Button value="next" />
      </Fragment>
    );
  }
}

export {About};