import React, { Component } from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"

export class GoButton extends Component {
    state = {
        switched: false
    }
    toggleSwitch = () => {
        this.props.toggleMyEvent(this.props.event.id)
        this.setState(prevState => {
            return { switched: !prevState.switched }
        })
    }

    render() {
        return (
            <Switch
                onClick={this.toggleSwitch}
                on={this.state.switched}
                className="switch"
            >
                <i class="material-icons">GO!</i>
            </Switch>
        )
    }
}
