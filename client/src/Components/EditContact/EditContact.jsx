import React, { useState } from 'react'
import { Modal, Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { editContact } from "../../redux/actions/contactsActions"

function EditContact({ contact, history }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [updatedContact, setUpdatedContact] = useState({})

    const handleChange = (e) => {
        setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value })
    }

    const dispatch = useDispatch()
    const handleSubmit = () => {
        console.log("this is the id from handlesubmit", contact._id)
        dispatch(editContact({ updatedContact, id: contact._id }))
        handleClose()
    }
    return (
        <>
            <Button variant="outline-primary" onClick={handleShow}>
                Edit
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body><Form>
                    <Form.Group>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            name="firstName"
                            onChange={handleChange}
                            defaultValue={contact.firstName}
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            name="lastName"
                            onChange={handleChange}
                            defaultValue={contact.lastName}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Phone Number:</Form.Label>
                        <Form.Control
                            type="number"
                            placeholder="Enter phone number"
                            name="phone"
                            onChange={handleChange}
                            defaultValue={contact.phone}

                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Email Adress: </Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter Email"
                            name="email"
                            onChange={handleChange}
                            defaultValue={contact.email}

                        />
                    </Form.Group>
                </Form></Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Update Contact
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditContact
