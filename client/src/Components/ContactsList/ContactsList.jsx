import React, { useEffect, Fragment } from "react";
import "./ContactsList.css";

import { useDispatch, useSelector } from "react-redux"
import { getContacts } from "../../redux/actions/contactsActions"
import NavBar from "../NavBar/NavBar";

import ContactCard from "../ContactCard/ContactCard"

function ContactsList() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getContacts())
        // eslint-disable-next-line
    }, []);

    const contacts = useSelector(state => state.contactsReducer.contacts)
    return (
        <Fragment>
            <NavBar />
            <h1 style={{ margin: "20px" }}>this is the contacts List</h1>
            <div className="contactsArea">
                {contacts.map(contact => <ContactCard key={contact._id} contact={contact} />)}
            </div>
        </Fragment>
    );
}

export default ContactsList;
