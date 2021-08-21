import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "./AddContact.css";

import { useDispatch } from "react-redux"
import { addContact } from "../../redux/actions/contactsActions"
import { useHistory } from "react-router-dom"
import { Fragment } from "react";
import NavBar from "../NavBar/NavBar";


function AddContact() {
    // creating a new object to add
    const [newContact, setNewContact] = useState({});


    const handleChange = (e) => {
        setNewContact({ ...newContact, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const history = useHistory()
    const handleSubmit = () => {
        dispatch(addContact({ newContact }))
        history.push('/contactsList')
    }


    return (
        <Fragment>
            <NavBar />
            <div className="FormArea">
                <Form>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            name="phone"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Adress: </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Contact
                    </Button>
                </Form>
            </div>
        </Fragment>
    );
}

export default AddContact;
