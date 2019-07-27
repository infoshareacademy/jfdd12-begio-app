import React from "react"
import { Redirect } from "react-router-dom"
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import firebase from "firebase/app"
import "firebase/database"
import "firebase/auth"
import firebaseInit from "../firebase"
import AppLogo from "../assets/logoOfApp.png"
import { AuthConsumer } from "../contexts/AuthContext"
import "./SignUp.css"
export class SignUp extends React.Component {
    state = {
        email: "",
        password: "",
        name: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    signUp = (e, props) => {
        e.preventDefault()
        firebaseInit
            .auth()
            .createUserWithEmailAndPassword(
                this.state.email,
                this.state.password
            )
            .then(value => {
                firebase
                    .database()
                    .ref("users")
                    .child(value.user.uid)
                    .set({
                        name: this.state.name,
                        events: 0
                    })
            })
    }

    render() {
        return (
            <AuthConsumer>
                {loggedUser => {
                    if (loggedUser) {
                        return <Redirect to="/" />
                    }

                    return (
                        <div className="all">
                            <Grid
                                textAlign="center"
                                style={{ height: "80vh" }}
                                verticalAlign="middle"
                            >
                                <Grid.Column style={{ maxWidth: 450 }}>
                                    <div className="logoBigSignUp"><img className="logoBigImg" alt="GoLogo" src={AppLogo} /></div>
                                    <Header as="h2" color="grey" textAlign="center">
                                        Witaj w Go!Gdańsk
                                </Header>

                                    <Header>Zarejestruj się</Header>
                                    <Form size="large">
                                        <Segment stacked>
                                            <Form.Input
                                                fluid
                                                icon="user"
                                                iconPosition="left"
                                                placeholder="userName"
                                                onChange={this.handleChange}
                                                name="name"
                                            />
                                            <Form.Input
                                                fluid
                                                icon="user"
                                                iconPosition="left"
                                                placeholder="E-mail address"
                                                onChange={this.handleChange}
                                                name="email"
                                            />
                                            <Form.Input
                                                fluid
                                                icon="lock"
                                                iconPosition="left"
                                                placeholder="Password"
                                                type="password"
                                                name="password"
                                                onChange={this.handleChange}
                                            />

                                            <Button
                                                onClick={this.signUp}
                                                style={{ color: "#49406dce" }}
                                                fluid
                                                size="large"
                                            >
                                                Zarejestruj się!
                                        </Button>
                                        </Segment>
                                    </Form>
                                    <Message>
                                        Masz już konto?{" "}
                                        <a href="/Login">Zaloguj się!</a>
                                    </Message>
                                </Grid.Column>
                            </Grid>
                        </div>
                    )
                }}
            </AuthConsumer>
        )
    }
}
