import React, { Component, Fragment } from "react";

import { Button } from "../../forms/Button";
import { Input } from "../../forms/Input";

class About extends Component {
  
  render() {
    return (
      <section className={this.props.className}  id={this.props.id}>
        <Input placeholder="Name" inputtype="text" type="type" name="name" className="block center" />
        <Input placeholder="Short Bio!" inputtype="textarea" name="bio" className="block center" />
        <Input inputtype="file" name="file" className="block center" />
        <Input inputtype="select" name="country" className="block center" />
        <Input placeholder="Address" inputtype="text" type="text" name="address" className="block center" />
        <Input placeholder="Email" inputtype="text" type="email" name="email" className="block center"  />
        <Input placeholder="Phone" inputtype="text" type="text" name="phone" className="block center" />
        <Input inputtype="text" type="radio" name="freelancer" className=" center" />
        <Input inputtype="lable" content="Are you freelancer" className=" line--center" />

        <Button value="next" className="block center" onClick={
          this.props.next
        }/>
        <hr />
      </section>
    );
  }
}

export { About };
