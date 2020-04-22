import React from 'react';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import '../App.css';

class Login extends React.Component{
    constructor(props){
        super(props);
        
        // Variables
        this.state = {Email: null, Password: null}

        // Handle Methods
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }

    // Handle Methods
    handleSubmit(){
        if(this.state.Email === "Admin@gmit.ie" && this.state.Password === "badCode"){
            this.props.history.push('/adminPanel');
            document.cookie = {Email: this.state.Email, Password: this.state.Password} + ";path=/";
            //ask connor about the alert from not including @ on email entry
        }
        else {
            alert("Login is incorrect! Try again.")
        }
    }
    handleEmail(e){
        this.setState({Email: e.target.value});       
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
                                <b>
                                <Form.Label>Email address</Form.Label>
                                </b>
                                <Form.Control type="email" placeholder="Enter email" onChange={this.handleEmail}/>
                                <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <b>
                                <Form.Label>Password</Form.Label>
                                </b>
                                <Form.Control type="password" placeholder="Password" onChange={this.handlePassword}/>
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