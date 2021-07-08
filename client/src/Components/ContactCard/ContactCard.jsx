import React from 'react'
import { Card, Button } from "react-bootstrap"
import EditContact from '../EditContact/EditContact'
import "./ContactCard.css"

import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/actions/contactsActions"


function ContactCard({ contact, history }) {

    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(deleteContact({ id: contact._id }))
    }

    return (
        <div>
            <Card
                bg="light"
                text="black"
                style={{ width: '18rem' }}
                className="mb-2 contactCard"
            >
                <Card.Header className="cardHeader">{`${contact.firstName} ${contact.lastName}`}</Card.Header>
                <Card.Body>
                    <Card.Title> {contact.phone} </Card.Title>
                    <Card.Text>
                        {contact.email}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="cardFooter">
                    <EditContact contact={contact} history={history} />
                    <Button variant="outline-danger" onClick={handleDelete}>Delete</Button>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default ContactCard
