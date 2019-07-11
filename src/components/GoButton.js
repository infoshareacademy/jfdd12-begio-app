import React, { Component } from "react"
import Switch from "react-toggle-switch"
import "../../node_modules/react-toggle-switch/dist/css/switch.min.css"
import MaterialIcon from "material-icons-react"
let myEvents = localStorage.getItem("myEvents")

export class GoButton extends Component {
    state = {
        switched: false,
        myEvents: []
    }

    componentDidMount() {
        if (myEvents.includes(this.props.event.id)) {
            this.setState({
                switched: true
            })
        }
    }

    toggleSwitch = () => {
        this.setState(prevState => {
            return {
                switched: !prevState.switched,
                myEvents: [...myEvents, this.props.event.id]
            }
        })
        // debugger
        this.state.switched
            ? this.props.removeMyEvent(this.props.event.id)
            : this.props.addMyEvent(this.props.event.id)
    }

    render() {
        return (
            <Switch
                onClick={this.toggleSwitch}
                on={this.state.switched}
                className="switch"
            >
                {<MaterialIcon icon="directions_run" />}
            </Switch>
        )
    }
}
