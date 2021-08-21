import axios from "axios";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./UserSignUp.css";
import { useHistory } from "react-router-dom"

function UserSignUp() {
    const [newUser, setNewUser] = useState({});
    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    };

    const history = useHistory()
    const handleSubmit = () => {
        axios
            .post("/api/users/register", newUser)
            .then(() => alert("user registered successfully"))
            // .catch((err) => console.error(err.response.data.msg));
            .catch((err) => alert(err.response.data.msg));
        history.push("/")
    };

    return (
        <div className="LoginForm">
            <h3>Sign Up here Friend</h3>
            <Form className="formContainer">
                <Form.Group controlId="formBasicUserName">
                    <Form.Label>FullName:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="enter Full Name"
                        name="userName"
                        autoComplete="username"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="enter email"
                        name="email"
                        autoComplete="email"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="enter Password"
                        name="password"
                        autoComplete="password"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicPassword2">
                    <Form.Label>confirm Password:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="enter Password"
                        name="password2"
                        autoComplete="password2"
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button variant="primary" onClick={handleSubmit}>
                    Sign Up
                </Button>
                <p>
                    or login{" "}
                    <Link to="/" className="loginLink">
                        here
                    </Link>
                </p>
            </Form>
        </div>
    );
}

export default UserSignUp;
