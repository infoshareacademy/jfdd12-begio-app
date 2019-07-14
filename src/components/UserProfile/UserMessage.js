import React, { Component } from "react"
import info from "./info.png"
export class UserMessage extends Component {
    render() {

        if (this.props.myEvents.length === 1) {
            return <p> <img src={info} /> Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> event w Gdańsku. </p>
        } else if (this.props.myEvents.length > 1 && this.props.myEvents.length <= 4) {
            return <p><img src={info} /> Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> eventy w Gdańsku. </p>
        } else {
            return <p> <img src={info} /> Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> eventów w Gdańsku. </p>
        }
    }
}