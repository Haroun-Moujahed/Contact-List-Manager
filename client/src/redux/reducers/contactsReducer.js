import { GET_CONTACTS } from "../constants/actions-types";

const initialState = {
    contacts: [],
};

const contactsReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case GET_CONTACTS:
            return {
                ...state,
                contacts: payload.data,
            };
        default:
            return state;
    }
};

export default contactsReducer;
