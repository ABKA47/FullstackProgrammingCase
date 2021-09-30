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
export const openAddUserModal = () => {
    return {
        type: actionTypes.OPENADDUSERMODAL
    }
}
export const openDeleteUserModal = () => {
    return {
        type: actionTypes.OPENDELETEUSERMODAL,
    }
}
export const openUpdateUserModal = () => {
    return {
        type: actionTypes.OPENUPDATEUSERMODAL,

    }
}
export const updateUser = (updateUserObject) => {
    return {
        type: actionTypes.UPDATEUSER,
        updateUserObject: updateUserObject
    }
}

export const openSpecificUserModal = () => {
    return {
        type: actionTypes.OPENSPECIFICUSERMODAL,

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
export const getIdFromUser = (id) => {
    return {
        type: actionTypes.GETIDFROMUSER,
        id: id
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
export const sendUpdateUser = (userId, userUpdatedObject) => {
    return dispatch => {
        axios.put(`update-user/${userId}`, userUpdatedObject)
    }
}