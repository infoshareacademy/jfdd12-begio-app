import React, { Component } from "react"

export class UserMessage extends Component {
    render() {

        if (this.props.myEvents.length === 1) {
            return <p>Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> event. Miłego pobytu w Gdańsku!</p>
        } else if (this.props.myEvents.length > 1 && this.props.myEvents.length <= 4) {
            return <p>Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> eventy. Miłego pobytu w Gdańsku!</p>
        } else {
            return <p>Witaj <b>{this.props.userName}</b>, jesteś zapisany na <b>{this.props.myEvents.length}</b> eventów. Miłego pobytu w Gdańsku!</p>
        }
    }
}