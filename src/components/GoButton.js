import React, { Component } from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"

export class GoButton extends Component {
    state = {
        switched: false
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return { switched: !prevState.switched }
        })
        // debugger
        this.state.switched
            ? console.log(`Nie idę na ${this.props.event.id}`)
            : this.props.addMyEvent(this.props.event.id)
    }

    render() {
        return (
            <Switch
                onClick={this.toggleSwitch}
                on={this.state.switched}
                className="switch"
            >
                <i class="material-icons">GO!</i>
                <p>{this.props.event.id}</p>
            </Switch>
        )
    }
}

// this.props.addMyEvent(this.props.event.id)
