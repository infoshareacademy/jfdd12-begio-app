import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import App from "../App";
import firebaseInit from "../firebase";
import ReactDOM from "react-dom";
import AppLogo from "../assets/logoOfApp.png";

export class SignUp extends React.Component {
  state = {
    email: "",
    password: "",
    name: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  signUp = (e, props) => {
    e.preventDefault();
    firebaseInit
      .auth()
      .createUserWithEmailAndPassword(
        this.state.email,
        this.state.password,
        this.state.name
      )
      .then(ReactDOM.render(<App />, document.getElementById("root")));
  };

  goToApp = () => ReactDOM.render(<App />, document.getElementById("root"));
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <img alt="GoLogo" src={AppLogo} />
          <Header as="h2" color="grey" textAlign="center">
            Witaj w Go!Gdańsk
          </Header>
          <Button color="#49406dce" fluid size="large" onClick={this.goToApp}>
            Przejdź do strony startowej
          </Button>
          <Header>Zarejestruj się</Header>
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
              {/* <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                placeholder="userName"
                onChange={this.handleChange}
                name="name"
              /> */}

              <Button
                onClick={this.signUp}
                color="#49406dce"
                fluid
                size="large"
              >
                Zarejestruj się!
              </Button>
            </Segment>
          </Form>
          <Message>
            Masz już konto? <a href="/Login">Zaloguj się!</a>
          </Message>
        </Grid.Column>
      </Grid>
    );
  }
}
