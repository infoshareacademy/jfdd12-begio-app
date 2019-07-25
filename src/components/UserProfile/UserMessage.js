import React, { Component } from "react"
import info from "../../assets/info.png"
export class UserMessage extends Component {
    render() {
        if (this.props.myEvents.length === 1) {
            return (
                <p>
                    {" "}
                    <img
                        className="infoImg"
                        src={info}
                        alt="info icon"
                    /> Witaj <b>{this.props.userName}</b>, masz{" "}
                    <b>{this.props.myEvents.length}</b> wydarzenie w kalendarz.{" "}
                </p>
            )
        } else if (
            this.props.myEvents.length > 1 &&
            this.props.myEvents.length <= 4
        ) {
            return (
                <p>
                    <img className="infoImg" src={info} alt="info icon" /> Witaj{" "}
                    <b>{this.props.userName}</b>, masz{" "}
                    <b>{this.props.myEvents.length}</b> wydarzenia w kalendarzu.{" "}
                </p>
            )
        } else if (this.props.myEvents.length === 0)
            return (
                <p>
                    {" "}
                    <img
                        className="infoImg"
                        src={info}
                        alt="info icon"
                    /> Witaj <b>{this.props.userName}</b>, nie masz jeszcze
                    żadnych wydarzeń w kalendarzu.{" "}
                </p>
            )
        else {
            return (
                <p>
                    {" "}
                    <img
                        className="infoImg"
                        src={info}
                        alt="info icon"
                    /> Witaj <b>{this.props.userName}</b>, masz{" "}
                    <b>{this.props.myEvents.length}</b> wydarzeń w kalendarzu.{" "}
                </p>
            )
        }
    }
}
