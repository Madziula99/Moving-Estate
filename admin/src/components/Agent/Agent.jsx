import React from "react";

class Agent extends React.Component {

  render() {
    return <>
      <img src={this.props.photo} alt="Agent" />
      <p>Name: {this.props.name}</p>
      <p>Location: {this.props.location}</p>
      <p>Email: {this.props.email}</p>
    </>
  }
}

export { Agent };
