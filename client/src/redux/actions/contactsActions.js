import { GET_CONTACTS } from "../constants/actions-types";
import axios from "axios";

export const getContacts = () => (dispatch) => {
    axios
        .get("/api/contacts/getContacts")
        .then((response) =>
            dispatch({ type: GET_CONTACTS, payload: response.data })
        )
        .catch((err) => console.log(err));
};

export const addContact = (payload) => (dispatch) => {
    axios
        .post("/api/contacts/addContact", payload.newContact)
        .then(() => dispatch(getContacts()))
        .catch((err) => console.log(err));
};
export const editContact = (payload) => (dispatch) => {
    axios
        .put(
            `/api/contacts/updateContact/${payload.id}`,
            payload.updatedContact
        )
        .then(() => dispatch(getContacts()))
        .catch((err) => console.log(err));
};
export const deleteContact = (payload) => (dispatch) => {
    axios
        .delete(`/api/contacts/deleteContact/${payload.id}`)
        .then(() => dispatch(getContacts()))
        .catch((err) => console.log(err));
};
