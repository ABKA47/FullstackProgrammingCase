import * as actionTypes from './actionTypes'
import axios from '../../axios'

export const fetchUsers = (users) => {
    return {
        type: actionTypes.FETCHUSERS,
        usersData: users
    }
}

export const editUserModal = (userId) => {
    return {
        type: actionTypes.EDITUSERMODAL,
        userId: userId
    }
}
export const openUserModal = () => {
    return {
        type: actionTypes.OPENUSERMODAL
    }
}
export const closeUserModal = () => {
    return {
        type: actionTypes.CLOSEUSERMODAL
    }
}

export const addNewUser = (newUserObject) => {
    return {
        type: actionTypes.ADDUSER,
        newUserObject: newUserObject
    }
}

export const fetchAllUsers = () => {
    return dispatch => {
        axios.get('users').then(response => {         
            dispatch(fetchUsers(response.data))
        })
    }
}
export const sendNewUser = (userObject) => {
    return dispatch => {
        axios.post("add-user", userObject)
    }
}