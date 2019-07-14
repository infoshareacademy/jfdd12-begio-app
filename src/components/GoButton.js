import React, { Component } from "react";
import Switch from "react-toggle-switch";
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css";
import MaterialIcon from "material-icons-react";

export class GoButton extends Component {
  state = {
    switched: false
  };

  toggleSwitch = () => {
    this.props.myEvents.includes(this.props.event.id)
      ? this.props.removeMyEvent(this.props.event.id)
      : this.props.addMyEvent(this.props.event.id);
  };

  render() {
    return (
      <Switch
        onClick={this.toggleSwitch}
        on={this.props.myEvents.includes(this.props.event.id)}
        className="switch"
      >
        {<MaterialIcon icon="directions_run" />}
      </Switch>
    );
  }
}
