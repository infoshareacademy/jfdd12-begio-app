import React from "react"
import { Redirect } from "react-router-dom"
import { Button, Form, Grid, Header, Message, Segment } from "semantic-ui-react"
import firebaseInit from "../firebase"
import AppLogo from "../assets/logoOfApp.png"
import { AuthConsumer } from "../contexts/AuthContext"
import "./SignUp.css"
export class Login extends React.Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    login = (e, props) => {
        e.preventDefault()
        firebaseInit
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch(error => alert("Nieprawidłowy e-mail lub hasło!"))
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
                                    <div className="logoBig"> <img className="logoBigImg" alt="GoLogo" src={AppLogo} /></div>
                                    <Header as="h2" color="grey" textAlign="center">
                                        Witaj w Go!Gdańsk
                                </Header>

                                    <Header>Zaloguj się</Header>
                                    <Form size="large">
                                        <Segment stacked>
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
                                                onClick={this.login}
                                                style={{ color: "#49406dce" }}
                                                fluid
                                                size="large"
                                            >
                                                Login
                                        </Button>
                                        </Segment>
                                    </Form>
                                    <Message>
                                        Jesteś nowy?{" "}
                                        <a href="/sign-up">Zarejestruj się!</a>
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
