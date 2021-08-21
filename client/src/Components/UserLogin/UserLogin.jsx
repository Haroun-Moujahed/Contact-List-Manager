import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./UserLogin.css";
import { login } from "../../utils"
import { useHistory } from "react-router-dom"

function UserLogin() {
    const [loginData, setLoginData] = useState({});
    const handleChange = (e) => {
        setLoginData({ ...loginData, [e.target.name]: e.target.value });
    };

    const history = useHistory()
    const handleSubmit = () => {
        axios
            .post("api/users/login", loginData)
            .then((response) => { login(response.data.token); history.push("/contactsList") })
            .catch((err) => alert(err.response.data.msg));

    };

    return (
        <div className="LoginForm">
            <h3>Login here Friend</h3>
            <Form className="formContainer">
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        onChange={handleChange}
                        autoComplete="username"
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        name="password"
                        placeholder="Password"
                        onChange={handleChange}
                        autoComplete="current-password"
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Login
                </Button>
                <p className="signUp_msg">
                    or create a new account <a href="/signUp">here</a>
                </p>
            </Form>
        </div>
    );
}

export default UserLogin;
