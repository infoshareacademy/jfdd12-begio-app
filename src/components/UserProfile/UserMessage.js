import React, { Component } from "react";
import info from "../../assets/info.png";
export class UserMessage extends Component {
  render() {
    if (this.props.myEvents.length === 1) {
      return (
        <p>
          {" "}
          <img className="infoImg" src={info} /> Witaj{" "}
          <b>{this.props.userName}</b>, jesteś zapisany na{" "}
          <b>{this.props.myEvents.length}</b> wydarzenie.{" "}
        </p>
      );
    } else if (
      this.props.myEvents.length > 1 &&
      this.props.myEvents.length <= 4
    ) {
      return (
        <p>
          <img className="infoImg" src={info} /> Witaj{" "}
          <b>{this.props.userName}</b>, jesteś zapisany na{" "}
          <b>{this.props.myEvents.length}</b> wydarzenia.{" "}
        </p>
      );
    } else if (this.props.myEvents.length === 0)
      return (
        <p>
          {" "}
          <img className="infoImg" src={info} /> Witaj{" "}
          <b>{this.props.userName}</b>, nie jesteś jeszcze zapisany na żadne
          wydarzenie.{" "}
        </p>
      );
    else {
      return (
        <p>
          {" "}
          <img className="infoImg" src={info} /> Witaj{" "}
          <b>{this.props.userName}</b>, jesteś zapisany na{" "}
          <b>{this.props.myEvents.length}</b> wydarzeń.{" "}
        </p>
      );
    }
  }
}
