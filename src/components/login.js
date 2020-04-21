import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import '../App.css';
import AdminPanel from './adminPanel';
import { Switch, Route, BrowserRouter } from "react-router-dom";

class Login extends React.Component{
    constructor(props){
        super(props);
        
        // Variables
        this.state = {Username:"", Password:""}

        // Handle Methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    // Handle Methods
    handleSubmit(e){
        e.preventDefault();

        if(this.state.Username == "Admin" && this.state.Password == "badCode"){


        }
    }
    handleUsername(e){
        this.setState({Username: e.target.value});       
    }
    handlePassword(e){
        this.setState({Password: e.target.value});
    }

    render(){
        return(
            <div>
                <h1>Login</h1>
                <div class="bodyFormat">
                    <div class="centerElement">
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <br></br>
                                <Form.Label>Email address</Form.Label>
                                <Form.Control type="email" placeholder="Enter email"/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>         
                </div>
            </div>            
        )   
    }
}
export default Login;