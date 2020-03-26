import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer'

const initialState = {
    users: []
}

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    function removeUser(id) {
        dispatch({
            type: 'REMOVE_USER',
            payload: id
        });
    };

    function addUser(users) {
        dispatch({
            type: 'ADD_USERS',
            payload: users
        });
    };

    function editUser(users) {
        dispatch({
            type: 'EDIT_USER',
            payload: users
        });
    };

    return (<GlobalContext.Provider value={{
        users: state.users,
        removeUser,
        addUser,
        editUser
    }}>
        {children}
    </GlobalContext.Provider>);
}